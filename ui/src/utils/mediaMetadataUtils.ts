export function getPngMetadata(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Get the PNG data as a Uint8Array
      // @ts-expect-error
      const pngData = new Uint8Array(event.target.result);
      const dataView = new DataView(pngData.buffer);

      // Check that the PNG signature is present
      if (dataView.getUint32(0) !== 0x89504e47) {
        console.error("Not a valid PNG file");
        reject();
      }

      // Start searching for chunks after the PNG signature
      let offset = 8;
      const txt_chunks: Record<string, string> = {};
      // Loop through the chunks in the PNG file
      while (offset < pngData.length) {
        // Get the length of the chunk
        const length = dataView.getUint32(offset);
        // Get the chunk type
        const type = String.fromCharCode(
          ...pngData.slice(offset + 4, offset + 8),
        );
        if (type === "tEXt" || type == "comf") {
          // Get the keyword
          let keyword_end = offset + 8;
          while (pngData[keyword_end] !== 0) {
            keyword_end++;
          }
          const keyword = String.fromCharCode(
            ...pngData.slice(offset + 8, keyword_end),
          );
          // Get the text
          const contentArraySegment = pngData.slice(
            keyword_end + 1,
            offset + 8 + length,
          );
          const contentJson = Array.from(contentArraySegment)
            .map((s) => String.fromCharCode(s))
            .join("");
          txt_chunks[keyword] = contentJson;
        }

        offset += 12 + length;
      }

      resolve(txt_chunks);
    };

    reader.readAsArrayBuffer(file);
  });
}

function parseExifData(exifData: any) {
  // Check for the correct TIFF header (0x4949 for little-endian or 0x4D4D for big-endian)
  const isLittleEndian = new Uint16Array(exifData.slice(0, 2))[0] === 0x4949;

  // Function to read 16-bit and 32-bit integers from binary data
  function readInt(
    offset: number,
    isLittleEndian: boolean | undefined,
    length: number,
  ) {
    const arr = exifData.slice(offset, offset + length);
    if (length === 2) {
      return new DataView(arr.buffer, arr.byteOffset, arr.byteLength).getUint16(
        0,
        isLittleEndian,
      );
    } else if (length === 4) {
      return new DataView(arr.buffer, arr.byteOffset, arr.byteLength).getUint32(
        0,
        isLittleEndian,
      );
    }
  }

  // Read the offset to the first IFD (Image File Directory)
  const ifdOffset = readInt(4, isLittleEndian, 4);

  function parseIFD(offset: number) {
    const numEntries = readInt(offset, isLittleEndian, 2);
    const result = {};

    for (let i = 0; i < numEntries; i++) {
      const entryOffset = offset + 2 + i * 12;
      const tag = readInt(entryOffset, isLittleEndian, 2);
      const type = readInt(entryOffset + 2, isLittleEndian, 2);
      const numValues = readInt(entryOffset + 4, isLittleEndian, 4);
      const valueOffset = readInt(entryOffset + 8, isLittleEndian, 4);

      // Read the value(s) based on the data type
      let value;
      if (type === 2) {
        // ASCII string
        value = String.fromCharCode(
          ...exifData.slice(valueOffset, valueOffset + numValues - 1),
        );
      }

      result[tag] = value;
    }

    return result;
  }

  // Parse the first IFD
  const ifdData = parseIFD(ifdOffset);
  return ifdData;
}

export function getWebpMetadata(file: File) {
  return new Promise((r) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const webp = new Uint8Array(event?.target?.result as Iterable<number>);
      const dataView = new DataView(webp.buffer);

      // Check that the WEBP signature is present
      if (
        dataView.getUint32(0) !== 0x52494646 ||
        dataView.getUint32(8) !== 0x57454250
      ) {
        console.error("Not a valid WEBP file");
        r();
        return;
      }

      // Start searching for chunks after the WEBP signature
      let offset = 12;
      const txt_chunks = {};
      // Loop through the chunks in the WEBP file
      while (offset < webp.length) {
        const chunk_length = dataView.getUint32(offset + 4, true);
        const chunk_type = String.fromCharCode(
          ...webp.slice(offset, offset + 4),
        );
        if (chunk_type === "EXIF") {
          if (
            String.fromCharCode(...webp.slice(offset + 8, offset + 8 + 6)) ==
            "Exif\0\0"
          ) {
            offset += 6;
          }
          const data = parseExifData(
            webp.slice(offset + 8, offset + 8 + chunk_length),
          );
          for (const key in data) {
            const value = data[key];
            const index = value.indexOf(":");
            txt_chunks[value.slice(0, index)] = value.slice(index + 1);
          }
        }

        offset += 8 + chunk_length;
      }

      r(txt_chunks);
    };

    reader.readAsArrayBuffer(file);
  });
}

export function isVideoName(name: string) {
  if (name?.endsWith(".webm")) {
    return true;
  }
  if (name?.endsWith(".mp4")) {
    return true;
  }

  return false;
}

export function getVideoMetadata(file) {
  return new Promise((r) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const videoData = new Uint8Array(event.target.result);
      const dataView = new DataView(videoData.buffer);

      const decoder = new TextDecoder();
      // Check for known valid magic strings
      if (dataView.getUint32(0) == 0x1a45dfa3) {
        //webm
        //see http://wiki.webmproject.org/webm-metadata/global-metadata
        //and https://www.matroska.org/technical/elements.html
        //contrary to specs, tag seems consistently at start
        //COMMENT + 0x4487 + packed length?
        //length 0x8d8 becomes 0x48d8
        //
        //description for variable length ints https://github.com/ietf-wg-cellar/ebml-specification/blob/master/specification.markdown
        let offset = 4 + 8; //COMMENT is 7 chars + 1 to realign
        while (offset < videoData.length - 16) {
          //Check for text tags
          if (dataView.getUint16(offset) == 0x4487) {
            //check that name of tag is COMMENT
            const name = String.fromCharCode(
              ...videoData.slice(offset - 7, offset),
            );
            if (name === "COMMENT") {
              const vint = dataView.getUint32(offset + 2);
              const n_octets = Math.clz32(vint) + 1;
              if (n_octets < 4) {
                //250MB sanity cutoff
                const length =
                  (vint >> (8 * (4 - n_octets))) & ~(1 << (7 * n_octets));
                const content = decoder.decode(
                  videoData.slice(
                    offset + 2 + n_octets,
                    offset + 2 + n_octets + length,
                  ),
                );
                const json = JSON.parse(content);
                r(json);
                return;
              }
            }
          }
          offset += 1;
        }
      } else if (
        dataView.getUint32(4) == 0x66747970 &&
        dataView.getUint32(8) == 0x69736f6d
      ) {
        //mp4
        //see https://developer.apple.com/documentation/quicktime-file-format
        //Seems to make no guarantee for alignment
        let offset = videoData.length - 4;
        while (offset > 16) {
          //rough safe guess
          if (dataView.getUint32(offset) == 0x64617461) {
            //any data tag
            if (dataView.getUint32(offset - 8) == 0xa9636d74) {
              //cmt data tag
              const type = dataView.getUint32(offset + 4); //seemingly 1
              const locale = dataView.getUint32(offset + 8); //seemingly 0
              const size = dataView.getUint32(offset - 4) - 4 * 4;
              const content = decoder.decode(
                videoData.slice(offset + 12, offset + 12 + size),
              );
              const json = JSON.parse(content);
              r(json);
              return;
            }
          }

          offset -= 1;
        }
      } else {
        console.error("Unknown magic: " + dataView.getUint32(0));
        r();
        return;
      }
    };

    reader.readAsArrayBuffer(file);
  });
}

import os
from PIL import Image
import base64
from io import BytesIO
from pathlib import Path

MAX_IMAGE_SIZE = 250

def preview_file(filename: str):
    preview_exts = [".jpg", ".png", ".jpeg", ".gif"]
    preview_exts = [*preview_exts, *[".preview" + x for x in preview_exts]]
    for ext in preview_exts:
        try:
            pathStr = os.path.splitext(filename)[0] + ext
            path = Path(pathStr).resolve()
            if os.path.exists(path):
                # because ComfyUI has extra model path feature
                # the path might not be relative to the ComfyUI root
                # so instead of returning the path, we return the image data directly, to avoid security issues
                bytes = get_thumbnail_for_image_file(path)
                # Get the base64 string
                img_base64 = base64.b64encode(bytes).decode()
                # Return the base64 string
                return f"data:image/jpeg;base64, {img_base64}"
        except Exception as e:
            print(f"Error opening image preview: {e}")
    return None


def get_thumbnail_for_image_file(file_path: Path):
    try:
        with Image.open(file_path) as img:
            # If the image is too large, resize it
            if img.width > MAX_IMAGE_SIZE and img.height > MAX_IMAGE_SIZE:
                # Calculate new width to maintain aspect ratio
                width = int(img.width * MAX_IMAGE_SIZE / img.height)
                # Resize the image
                img = img.resize((width, MAX_IMAGE_SIZE))
            img = img.convert("RGB")
            # Save the image to a BytesIO object
            buffer = BytesIO()
            img.save(buffer, format="JPEG", quality=85)
            return buffer.getvalue()
    except Exception as e:
        print(f"Error opening image preview: {e}")
        return None

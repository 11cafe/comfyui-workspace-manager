import os
from PIL import Image
import base64
from io import BytesIO

def preview_file(filename: str):
    preview_exts = [".jpg", ".png", ".jpeg", ".gif"]
    preview_exts = [*preview_exts, *[".preview" + x for x in preview_exts]]
    for ext in preview_exts:
        path = os.path.splitext(filename)[0] + ext
        if os.path.exists(path):
            # because ComfyUI has extra model path feature
            # the path might not be relative to the ComfyUI root
            # so instead of returning the path, we return the image data directly, to avoid security issues
            with Image.open(path) as img:
                # If the image is too large, resize it
                if img.width > 128 and img.height > 178:
                    # Calculate new width to maintain aspect ratio
                    width = int(img.width * 178 / img.height)
                    # Resize the image
                    img = img.resize((width, 178))
                img = img.convert("RGB")
                # Save the image to a BytesIO object
                buffer = BytesIO()
                img.save(buffer, format="JPEG", quality=85)
                # Get the base64 string
                img_base64 = base64.b64encode(buffer.getvalue()).decode()
                # Return the base64 string
                return f"data:image/jpeg;base64, {img_base64}"
    return None
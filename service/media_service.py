
import asyncio
import server
from aiohttp import FormData, web, ClientSession
import folder_paths
import os
from .model_manager.model_preview import get_thumbnail_for_image_file

image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
video_extensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv']

def view_media(filename, isPreview = False, isInput = False):
    if not filename:
        return web.Response(status=404)
    
    # validation for security: prevent accessing arbitrary path
    if filename[0] == '/' or '..' in filename:
        return web.Response(status=400)

    path = folder_paths.get_input_directory() if isInput else folder_paths.get_output_directory()
    file_path = os.path.join(path, filename)

    if not os.path.exists(file_path):
        return web.Response(status=404)
    
    file_extension = os.path.splitext(filename)[1].lower()
    if isPreview and file_extension in image_extensions:
            return web.json_response(
                body=get_thumbnail_for_image_file(file_path),
                content_type='image/jpeg',
                headers={"Content-Disposition": f"filename=\"{filename}.jpg\""}
            )
        
    with open(file_path, 'rb') as f:
        media_file = f.read()

    content_type = 'application/json'
    
    if file_extension in image_extensions:
        content_type = f'image/{file_extension[1:]}'
    if file_extension in video_extensions:
        content_type = f'video/{file_extension[1:]}'

    return web.Response(
        body=media_file,
        content_type=content_type,
        headers={"Content-Disposition": f"filename=\"{filename}\""}
    )

@server.PromptServer.instance.routes.get("/workspace/preview_media")
async def preview_file(request):
    filename = request.query.get("filename", None)
    return await asyncio.to_thread(view_media, filename, True)

@server.PromptServer.instance.routes.get("/workspace/view_media")
async def view_file(request):
    filename = request.query.get("filename", None)
    isPreview = request.query.get("isPreview", False)
    isInput = request.query.get("isInput", False)
    return await asyncio.to_thread(view_media, filename, isPreview, isInput)

@server.PromptServer.instance.routes.get("/workspace/upload_image")
async def upload_image_handler(request):
    # The URL to your Next.js API endpoint
    next_js_api_url = 'http://localhost:3000/api/image/upload'

    image_path = request.query.get("image", None)
    
    if not image_path:
        return web.Response(status=400, text="Image path is required")

    abs_path = os.path.join(folder_paths.get_input_directory(), image_path)
    print('get abs_path', abs_path)
    data = FormData()
    

    # Open and read the image file into memory
    with open(abs_path, 'rb') as img:
        # Here, img.read() reads the file content into memory
        print('img.read()', img)
        data.add_field('file', img.read(), filename=os.path.basename(image_path), content_type='application/octet-stream')
    print('data', data)
    # Forward the image to the Next.js API
    try:
        async with ClientSession() as session:
            async with session.post(next_js_api_url, data=data) as response:
                # Check for HTTP errors
                if response.status != 200:
                    text = await response.text()
                    return web.Response(status=response.status, text=text)
                print('response', response)
                result = await response.json()
                return web.Response(text=str(result), content_type='application/json')
    except Exception as e:
        # Handle exceptions related to the POST request
        return web.Response(status=500, text=f"Error forwarding the image to the Next.js API: {e}")




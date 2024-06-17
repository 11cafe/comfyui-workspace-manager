
import asyncio
import json
import server
from aiohttp import FormData, web, ClientSession
import folder_paths
import os
from .model_manager.model_preview import get_thumbnail_for_image_file
from .setting_service import get_settings

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

@server.PromptServer.instance.routes.post("/workspace/upload_image")  # Handle POST requests
async def upload_image_handler(request):
    settings = get_settings()
    cloudHost = settings.get("cloudHost", 'https://www.nodecafe.co')
    API_URL = cloudHost + '/api/image/upload'
    data = await request.json()
    image_paths = data.get("images")
    if not image_paths:
        return web.Response(status=400, text="Images parameter is required and should be a list of image paths.")

    # Initialize FormData for multipart upload
    multipart_data = FormData()
    files_not_found = []

    # Iterate over image paths to add them to FormData
    for image_path in image_paths:
        abs_path = os.path.join(folder_paths.get_input_directory(), image_path)
        
        if not os.path.exists(abs_path):
            files_not_found.append(image_path)
            continue  # Skip this file and proceed with the next

        with open(abs_path, 'rb') as img:
            multipart_data.add_field('file', img.read(), 
                                     filename=os.path.basename(image_path),
                                     content_type='application/octet-stream')  # Adjust MIME type as necessary

    # Handle case where one or more files were not found
    if files_not_found:
        return web.Response(status=404, text=f"Image file(s) not found: {', '.join(files_not_found)}")
    
    try:
        async with ClientSession() as session:
            async with session.post(API_URL, data=multipart_data) as response:
                if response.status != 200:
                    text = await response.text()
                    return web.Response(status=response.status, text=text)
                
                result = await response.json()
                return web.Response(text=json.dumps(result), content_type='application/json')
    except Exception as e:
        return web.Response(status=500, text=f"Error forwarding the images to the Next.js API: {e}")

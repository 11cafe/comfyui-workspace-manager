
import asyncio
import server
from aiohttp import web
import folder_paths
import os
from .model_manager.model_preview import get_thumbnail_for_image_file

image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
video_extensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv']

def view_media(filename, isPreview = False):
    if not filename:
        return web.Response(status=404)
    
    # validation for security: prevent accessing arbitrary path
    if filename[0] == '/' or '..' in filename:
        return web.Response(status=400)

    output_path = folder_paths.get_output_directory()
    file_path = os.path.join(output_path, filename)

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
    return await asyncio.to_thread(view_media, filename, False)
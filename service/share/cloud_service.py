import server
import asyncio
from aiohttp import web

loop = asyncio.get_event_loop()
def send_ws(event, data):
    asyncio.run_coroutine_threadsafe(server.PromptServer.instance.send(event, data) , loop)

@server.PromptServer.instance.routes.post("/workspace/created_cloudflow_version")
async def created_cloudflow_version(request):
    reqJson = await request.json()
    send_ws("created_cloudflow_version", reqJson)
    response = web.Response(text="Cloudflow created successfully")
    # Add CORS headers specifically to this response
    response.headers['Access-Control-Allow-Origin'] = 'https://www.comfyspace.art/' 
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


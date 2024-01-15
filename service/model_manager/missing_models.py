import asyncio
import json
import server
from aiohttp import web
import nodes
import ast
import inspect

@server.PromptServer.instance.routes.post("/model_manager/find_missing_models")
async def find_missing_models(request):
    print('find_missing_models',request)
    json_data = await request.json()
    workflow = json_data['workflow']
    print('find_missing_models workflow', workflow)

    # def missing_nodes_in_workflow():
    models_nodes = {}
    for node in workflow['nodes']:
        try:
            node_type = node['type']
            obj_class = nodes.NODE_CLASS_MAPPINGS[node_type]
            models_dir=  extract_folder_paths_arguments_with_key(obj_class)
            if(models_dir):
                models_nodes[node['id']] = {
                    'type': node_type,
                    'models_dir': models_dir
                }
                print('find_missing_models node_type', node_type, models_dir)
        except Exception as e:
            print('find_missing_models exception', e)
            continue
    # await asyncio.to_thread(missing_nodes_in_workflow, file_name, json_data)

    # return web.Response(json=models_nodes)
    return web.Response(text=json.dumps(models_nodes), status=500)

def extract_folder_paths_argument(class_def):
    source = inspect.getsource(class_def)
    tree = ast.parse(source)

    for node in ast.walk(tree):
        # Check for the INPUT_TYPES method
        if isinstance(node, ast.FunctionDef) and node.name == 'INPUT_TYPES':
            for sub_node in ast.walk(node):
                # Check for a call to folder_paths.get_filename_list
                if isinstance(sub_node, ast.Call) and hasattr(sub_node.func, 'attr'):
                    if sub_node.func.attr == 'get_filename_list':
                        # Extract the argument passed to the function
                        if sub_node.args:
                            return sub_node.args[0].s  # Assuming it's a string argument
    return None

def extract_folder_paths_arguments_with_key(class_def):
    source = inspect.getsource(class_def)
    tree = ast.parse(source)

    arguments = {}

    for node in ast.walk(tree):
        if isinstance(node, ast.FunctionDef) and node.name == 'INPUT_TYPES':
            for sub_node in ast.walk(node):
                # Check if the node is a dictionary
                if isinstance(sub_node, ast.Dict):
                    for key, value in zip(sub_node.keys, sub_node.values):
                        # Check if the value is a call to folder_paths.get_filename_list
                        if isinstance(value, ast.Tuple) and value.elts:
                            call_node = value.elts[0]
                            if isinstance(call_node, ast.Call) and hasattr(call_node.func, 'attr'):
                                if call_node.func.attr == 'get_filename_list':
                                    if call_node.args:
                                        key_name = key.s  # Extract the key name
                                        print('key_name', key_name)
                                        folder_name = call_node.args[0].s  # Extract the argument
                                        print('folder_name', folder_name)
                                        arguments[key_name] = folder_name
    return arguments

def find_folder_paths_arguments(class_def):
    source = inspect.getsource(class_def)
    tree = ast.parse(source)

    arguments = {}

    for node in ast.walk(tree):
        if isinstance(node, ast.FunctionDef) and node.name == 'INPUT_TYPES':
            for sub_node in ast.walk(node):
                if isinstance(sub_node, ast.Call) and hasattr(sub_node.func, 'attr'):
                    if sub_node.func.attr == 'get_filename_list':
                        if sub_node.args:
                            # This will get the name of the key under which the call is made
                            parent = next(ast.iter_child_nodes(sub_node.parent))
                            if isinstance(parent, ast.Str):
                                key_name = parent.s
                                print('key_name', key_name)
                                arguments[key_name] = sub_node.args[0].s
                                print('arguments[key_name]', arguments[key_name])

    return arguments


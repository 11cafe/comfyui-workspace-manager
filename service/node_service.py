import inspect
import json
import os
import subprocess
from nodes import NODE_CLASS_MAPPINGS
import server
from aiohttp import web
BUILT_IN_NODE_TYPES = {
  "BasicScheduler",
  "CLIPLoader",
  "CLIPMergeSimple",
  "CLIPSave",
  "CLIPSetLastLayer",
  "CLIPTextEncode",
  "CLIPTextEncodeSDXL",
  "CLIPTextEncodeSDXLRefiner",
  "CLIPVisionEncode",
  "CLIPVisionLoader",
  "Canny",
  "CheckpointLoader",
  "CheckpointLoaderSimple",
  "CheckpointSave",
  "ConditioningAverage",
  "ConditioningCombine",
  "ConditioningConcat",
  "ConditioningSetArea",
  "ConditioningSetAreaPercentage",
  "ConditioningSetAreaStrength",
  "ConditioningSetMask",
  "ConditioningSetTimestepRange",
  "ConditioningZeroOut",
  "ControlNetApply",
  "ControlNetApplyAdvanced",
  "ControlNetLoader",
  "CropMask",
  "DiffControlNetLoader",
  "DiffusersLoader",
  "DualCLIPLoader",
  "EmptyImage",
  "EmptyLatentImage",
  "ExponentialScheduler",
  "FeatherMask",
  "FlipSigmas",
  "FreeU",
  "FreeU_V2",
  "GLIGENLoader",
  "GLIGENTextBoxApply",
  "GrowMask",
  "HyperTile",
  "HypernetworkLoader",
  "ImageBatch",
  "ImageBlend",
  "ImageBlur",
  "ImageColorToMask",
  "ImageCompositeMasked",
  "ImageCrop",
  "ImageInvert",
  "ImageOnlyCheckpointLoader",
  "ImageOnlyCheckpointSave",
  "ImagePadForOutpaint",
  "ImageQuantize",
  "ImageScale",
  "ImageScaleBy",
  "ImageScaleToTotalPixels",
  "ImageSharpen",
  "ImageToMask",
  "ImageUpscaleWithModel",
  "InpaintModelConditioning",
  "InvertMask",
  "JoinImageWithAlpha",
  "KSampler",
  "KSamplerAdvanced",
  "KSamplerSelect",
  "KarrasScheduler",
  "LatentAdd",
  "LatentBatch",
  "LatentBatchSeedBehavior",
  "LatentBlend",
  "LatentComposite",
  "LatentCompositeMasked",
  "LatentCrop",
  "LatentFlip",
  "LatentFromBatch",
  "LatentInterpolate",
  "LatentMultiply",
  "LatentRotate",
  "LatentSubtract",
  "LatentUpscale",
  "LatentUpscaleBy",
  "LoadImage",
  "LoadImageMask",
  "LoadLatent",
  "LoraLoader",
  "LoraLoaderModelOnly",
  "MaskComposite",
  "MaskToImage",
  "ModelMergeAdd",
  "ModelMergeBlocks",
  "ModelMergeSimple",
  "ModelMergeSubtract",
  "ModelSamplingContinuousEDM",
  "ModelSamplingDiscrete",
  "PatchModelAddDownscale",
  "PerpNeg",
  "PhotoMakerEncode",
  "PhotoMakerLoader",
  "PolyexponentialScheduler",
  "PorterDuffImageComposite",
  "PreviewImage",
  "RebatchImages",
  "RebatchLatents",
  "RepeatImageBatch",
  "RepeatLatentBatch",
  "RescaleCFG",
  "SDTurboScheduler",
  "SD_4XUpscale_Conditioning",
  "SVD_img2vid_Conditioning",
  "SamplerCustom",
  "SamplerDPMPP_2M_SDE",
  "SamplerDPMPP_SDE",
  "SaveAnimatedPNG",
  "SaveAnimatedWEBP",
  "SaveImage",
  "SaveLatent",
  "SelfAttentionGuidance",
  "SetLatentNoiseMask",
  "SolidMask",
  "SplitImageWithAlpha",
  "SplitSigmas",
  "StableZero123_Conditioning",
  "StableZero123_Conditioning_Batched",
  "StyleModelApply",
  "StyleModelLoader",
  "TomePatchModel",
  "UNETLoader",
  "UpscaleModelLoader",
  "VAEDecode",
  "VAEDecodeTiled",
  "VAEEncode",
  "VAEEncodeForInpaint",
  "VAEEncodeTiled",
  "VAELoader",
  "VAESave",
  "VPScheduler",
  "VideoLinearCFGGuidance",
  "unCLIPCheckpointLoader",
  "unCLIPConditioning"
}

def get_git_repo(node_type: str):
    if node_type not in NODE_CLASS_MAPPINGS:
        return None
    if node_type in BUILT_IN_NODE_TYPES:
        return None
    
    cls = NODE_CLASS_MAPPINGS[node_type]
    source_file = inspect.getfile(cls)
    directory = os.path.dirname(source_file)
    
    # Attempt to get the remote repository URL directly
    try:
        git_repo = subprocess.check_output(["git", "-C", directory, "config", "--get", "remote.origin.url"], text=True).strip()
    except subprocess.CalledProcessError:
        return None

    # Attempt to get the current commit hash
    try:
        commit_hash = subprocess.check_output(["git", "-C", directory, "rev-parse", "HEAD"], text=True).strip()
    except subprocess.CalledProcessError:
        return None
    if git_repo.endswith(".git"):
        git_repo = git_repo[:-4]
    username = git_repo.split("/")[-2]
    repo_name = git_repo.split("/")[-1]
    return {"gitRepo": f"{username}/{repo_name}", "commitHash": commit_hash}

@server.PromptServer.instance.routes.post("/workspace/fetch_node_repos")  # Handle POST requests
async def fetch_node_repos(request):
    data = await request.json()
    nodetypes = data.get("nodes")
    if not nodetypes:
        return web.Response(status=400, text="NodeTypes parameter is required and should be a list of node types.")
    repos_mapping = {}
    for nodetype in nodetypes:
        try:
            repo = get_git_repo(nodetype)
            if repo:
                repos_mapping[nodetype] = repo
        except Exception as e:
            print(f"Error fetching repo for {nodetype}: {e}")
    return web.Response(text=json.dumps(repos_mapping), content_type='application/json')


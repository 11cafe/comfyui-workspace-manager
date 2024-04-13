import type { EWorkflowPrivacy } from "../types/dbTypes";

export function getPrivacyEmoji(privacy: EWorkflowPrivacy) {
  switch (privacy) {
    case "PRIVATE":
      return "🔒";
    case "PUBLIC":
      return "🌐";
    case "UNLISTED":
      return "🔗";
    default:
      return "";
  }
}

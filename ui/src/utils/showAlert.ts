import "./showAlert.css";

// Function to show a modal alert
export function showAlert({
  message,
  level,
}: {
  message: string;
  level: "error" | "info" | "success";
}): void {
  // Create the modal container
  const modal = document.createElement("div");
  modal.classList.add("wokspace_modal");

  // Create the dialog
  const dialog = document.createElement("div");
  dialog.classList.add("workspace_dialog");
  dialog.classList.add(level); // Add class based on the alert level

  // Create the message paragraph
  const messageP = document.createElement("p");
  messageP.textContent = message;
  dialog.appendChild(messageP);
  modal.appendChild(dialog);
  document.body.appendChild(modal);

  // Function to remove the modal when clicked outside
  const removeModal = (event: MouseEvent) => {
    if (event.target === modal) {
      modal.removeEventListener("click", removeModal);
      document.body.removeChild(modal);
    }
  };

  // Attach the event listener to the modal
  modal.addEventListener("click", removeModal);
}

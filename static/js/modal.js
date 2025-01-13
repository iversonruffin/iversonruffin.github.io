// Function to display modal with dynamic title and message
function showModal(title, message) {
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body p");

    modalTitle.textContent = title;
    modalBody.textContent = message;

    const modal = new bootstrap.Modal(document.querySelector(".modal"));
    modal.show();
}



document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const guestEmail = document.getElementById("guestEmail");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let valid = true;

    // Reset previous styles
    [firstName, lastName, guestEmail, subject, message].forEach(field => {
        field.style.borderColor = "";
    });

    // Validate fields
    if (!firstName.value.trim()) {
        valid = false;
        firstName.style.borderColor = "red";
    }
    if (!lastName.value.trim()) {
        valid = false;
        lastName.style.borderColor = "red";
    }
    if (!guestEmail.value.trim() || !/\S+@\S+\.\S+/.test(guestEmail.value)) {
        valid = false;
        guestEmail.style.borderColor = "red";
    }
    if (!subject.value.trim()) {
        valid = false;
        subject.style.borderColor = "red";
    }
    if (!message.value.trim()) {
        valid = false;
        message.style.borderColor = "red";
    }

    if (valid) {
        // Send form data to Flask backend
        const formData = new FormData();
        formData.append("firstName", firstName.value.trim());
        formData.append("lastName", lastName.value.trim());
        formData.append("guest_email", guestEmail.value.trim());
        formData.append("Subject", subject.value.trim());
        formData.append("message", message.value.trim());

        try {
            const response = await fetch("/sendemail/", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.status === "success") {
                // Show success modal
                showModal("Success!", result.message);
                document.getElementById("contactForm").reset();
            } else {
                // Show error modal with server error message
                showModal("Error", result.message);
            }
        } catch (error) {
            // Show error modal for network or unexpected errors
            showModal("Error", "An unexpected error occurred. Please try again.");
        }
    } else {
        // Show error modal
        showModal("Error", "Please fill out all required fields.");
    }
});



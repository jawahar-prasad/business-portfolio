/**
 * 1. COST CALCULATION LOGIC
 * Calculates the sum of all checked items and updates the UI
 */
function calculateTotal() {
    const checkboxes = document.querySelectorAll('.shoe-select');
    const totalElement = document.getElementById('total-price');
    const itemsList = document.getElementById('selected-items');
    
    let total = 0;
    let selected = [];

    checkboxes.forEach(box => {
        if (box.checked) {
            total += parseFloat(box.getAttribute('data-price'));
            selected.push(box.value);
        }
    });

    // Update Total Display
    totalElement.innerText = `$${total.toFixed(2)}`;

    // Update Selected Items List
    if (selected.length > 0) {
        itemsList.innerText = "Selected: " + selected.join(", ");
    } else {
        itemsList.innerText = "No items selected yet.";
    }
}

/**
 * 2. FEEDBACK FORM VALIDATION
 * Validates inputs and provides visual feedback to the user
 */
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMsg = document.getElementById('formStatus');

    // Email pattern validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim().length < 2) {
        showStatus("Please enter your full name.", "red");
    } else if (!emailRegex.test(email)) {
        showStatus("Please enter a valid email address.", "red");
    } else if (message.trim().length < 10) {
        showStatus("Message is too short (min 10 characters).", "red");
    } else {
        // Success
        showStatus("Thank you, " + name + "! Your message has been sent.", "green");
        this.reset(); // Clear the form fields
    }
});

// Helper function for form status
function showStatus(text, color) {
    const statusMsg = document.getElementById('formStatus');
    statusMsg.innerText = text;
    statusMsg.style.color = color;
}
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("sketchCanvas");
    const ctx = canvas.getContext("2d");
    const clearButton = document.getElementById("clearCanvas");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Start drawing
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // Stop drawing
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    // Draw on canvas
    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return; // Only draw when mouse is pressed
        ctx.beginPath();
        ctx.moveTo(lastX, lastY); // Start from
        ctx.lineTo(e.offsetX, e.offsetY); // Go to
        ctx.strokeStyle = "#000"; // Line color
        ctx.lineWidth = 2; // Line width
        ctx.stroke(); // Draw the line
        [lastX, lastY] = [e.offsetX, e.offsetY]; // Update last position
    });

    // Clear the canvas
    clearButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const liabilityAdmitted = document.getElementById('liabilityAdmitted');
    const furnishDetailsGroup = document.getElementById('furnishDetailsGroup');

    liabilityAdmitted.addEventListener('change', () => {
        if (liabilityAdmitted.value === 'Yes') {
            furnishDetailsGroup.style.display = 'block';
        } else {
            furnishDetailsGroup.style.display = 'none';
        }
    });
});

const canvas = document.getElementById("employeeSignature");
const ctx = canvas.getContext("2d");
let isDrawing = false;

// Start drawing
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw on the canvas
canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath();
});

// Clear the canvas
document.getElementById("clearSignature").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const customerCanvas = document.getElementById("customerSignature");
const customerCtx = customerCanvas.getContext("2d");
let isCustomerDrawing = false;

// Start drawing for customer signature
customerCanvas.addEventListener("mousedown", (e) => {
    isCustomerDrawing = true;
    customerCtx.beginPath();
    customerCtx.moveTo(e.offsetX, e.offsetY);
});

// Draw on the customer signature canvas
customerCanvas.addEventListener("mousemove", (e) => {
    if (isCustomerDrawing) {
        customerCtx.lineTo(e.offsetX, e.offsetY);
        customerCtx.stroke();
    }
});

// Stop drawing
customerCanvas.addEventListener("mouseup", () => {
    isCustomerDrawing = false;
    customerCtx.closePath();
});

// Clear the customer signature canvas
document.getElementById("clearCustomerSignature").addEventListener("click", () => {
    customerCtx.clearRect(0, 0, customerCanvas.width, customerCanvas.height);
});

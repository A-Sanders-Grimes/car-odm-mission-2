export function showLoadingState() {
    const errorMessage = document.getElementById("errorMessage");
    const resultContainer = document.getElementById("resultContainer");
    const loadingIndicator = document.getElementById("loadingIndicator");

    if (errorMessage) errorMessage.classList.add("hidden");
    if (resultContainer) resultContainer.innerHTML = "";
    if (loadingIndicator) loadingIndicator.classList.remove("hidden");
}

export function hideLoadingState() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    if (loadingIndicator) loadingIndicator.classList.add("hidden");
}

export function renderErrorState(message) {
    hideLoadingState();
    const errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
    }
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function renderCarData(processedData) {
    hideLoadingState();
    const errorMessage = document.getElementById("errorMessage");
    const resultContainer = document.getElementById("resultContainer");
    
    if (errorMessage) errorMessage.classList.add("hidden");
    if (!resultContainer) return;

    const groupsHTML = Object.entries(processedData.groupedByInitial)
        .map(([letter, models]) => {
            const badges = models
                .map(m => `<span class="badge">${escapeHtml(m)}</span>`)
                .join("");
            return `
                <div class="group-title">Letter ${letter} (${models.length})</div>
                <div class="badge-container">${badges}</div>
            `;
        })
        .join("");

    resultContainer.innerHTML = `
        <div class="car-card">
            <h2>Manufacturer: ${escapeHtml(processedData.brand)}</h2>
            <div class="car-summary">
                Unique Sorted Models: <strong>${processedData.totalModelsCount}</strong>
            </div>
            ${groupsHTML}
        </div>
    `;
}

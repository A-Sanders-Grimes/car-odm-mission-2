const loadingIndicator = document.getElementById("loadingIndicator");
const errorMessage = document.getElementById("errorMessage");
const resultContainer = document.getElementById("resultContainer");

export function showLoadingState() {
    errorMessage.classList.add("hidden");
    resultContainer.innerHTML = "";
    loadingIndicator.classList.remove("hidden");
}

export function hideLoadingState() {
    loadingIndicator.classList.add("hidden");
}

export function renderErrorState(message) {
    hideLoadingState();
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

export function renderCarData(processedData) {
    hideLoadingState();
    errorMessage.classList.add("hidden");

    const badgesHTML = processedData.modelNames
        .map(model => `<span class="badge">${model}</span>`)
        .join("");

    resultContainer.innerHTML = `
        <div class="car-card">
            <h2>Manufacturer: ${processedData.brand}</h2>
            <div class="car-summary">
                Total Models Registered: <strong>${processedData.totalModelsCount}</strong> | 
                Name Chars Metric: <strong>${processedData.totalNameCharacters}</strong>
            </div>
            
            <div style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; margin-top: 10px;">Available Models:</div>
            <div class="badge-container">
                ${badgesHTML}
            </div>
        </div>
    `;
}
import { fetchCarModelsFromAPI } from './api.js';
import { processCarData } from './logic.js';
import { showLoadingState, hideLoadingState, renderErrorState, renderCarData } from './render.js';

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function handleSearch() {
    const query = searchInput.value;
    
    searchBtn.disabled = true;
    searchBtn.textContent = "Searching...";

    try {
        showLoadingState();

        const rawData = await fetchCarModelsFromAPI(query);
        const processedData = processCarData(rawData, query);

        renderCarData(processedData);
    } catch (error) {
        renderErrorState(error.message);
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search";
        hideLoadingState();
    }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
});

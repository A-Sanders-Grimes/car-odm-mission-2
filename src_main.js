import { fetchCarModelsFromAPI } from './src_api.js';
import { processCarData } from './src_logic.js';
import { showLoadingState, renderErrorState, renderCarData } from './src_render.js';

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function handleSearch() {
    const query = searchInput.value;
    
    try {
        showLoadingState();

        const rawData = await fetchCarModelsFromAPI(query);
        const processedData = processCarData(rawData, query);

        renderCarData(processedData);
    } catch (error) {
        renderErrorState(error.message);
    }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
});
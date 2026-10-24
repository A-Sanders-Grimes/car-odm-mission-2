export async function fetchCarModelsFromAPI(brandQuery) {
    const formattedBrand = brandQuery.toLowerCase().trim();
    if (!formattedBrand) {
        throw new Error("Please enter a valid car manufacturer name.");
    }

    // BONUS: Check localStorage cache so repeated queries load instantly
    const cacheKey = `car_brand_${formattedBrand}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        console.log("⚡ Loaded car data from localStorage cache!");
        return JSON.parse(cachedData);
    }

    // Fetch official NHTSA public API with async/await
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${formattedBrand}?format=json`);

    if (!response.ok) {
        throw new Error("Network response failed. Please try again.");
    }

    const data = await response.json();

    if (!data.Results || data.Results.length === 0) {
        throw new Error(`No models found for manufacturer "${formattedBrand}". Try honda, toyota, or ford.`);
    }

    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
}
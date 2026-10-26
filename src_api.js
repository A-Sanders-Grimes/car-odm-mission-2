export async function fetchCarModelsFromAPI(brandQuery) {
    const formattedBrand = brandQuery.toLowerCase().trim();
    if (!formattedBrand) {
        throw new Error("Please enter a valid car manufacturer name.");
    }

    const cacheKey = `car_brand_${formattedBrand}`;
    
    try {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            console.log("⚡ Loaded car data from localStorage cache!");
            return JSON.parse(cachedData);
        }
    } catch (err) {
        console.warn("Cache corrupted, clearing entry.", err);
        localStorage.removeItem(cacheKey);
    }

    const safeBrand = encodeURIComponent(formattedBrand);

    let response;
    try {
        response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${safeBrand}?format=json`);
    } catch (networkError) {
        throw new Error("Network connection failed. Please check your internet connection.");
    }

    if (!response.ok) {
        throw new Error("Server response failed. Please try again later.");
    }

    const data = await response.json();

    if (!data.Results || data.Results.length === 0) {
        throw new Error(`No models found for manufacturer "${formattedBrand}". Try honda, toyota, or ford.`);
    }

    try {
        localStorage.setItem(cacheKey, JSON.stringify(data));
    } catch (storageErr) {
        console.warn("Could not save to localStorage", storageErr);
    }

    return data;
}

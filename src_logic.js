export function processCarData(rawData, brandName) {
    const results = rawData.Results;

    // 1. .map(): Extract model names into a clean array of strings
    const modelNames = results.map(item => item.Model_Name);

    // 2. .filter(): Filter models containing specific characters
    const filteredSpecialModels = modelNames.filter(name => 
        name.toLowerCase().includes('a') || name.toLowerCase().includes('e')
    );

    // 3. .reduce(): Count total character length of all model names combined
    const totalNameCharacters = modelNames.reduce((acc, name) => acc + name.length, 0);

    return {
        brand: brandName.toUpperCase(),
        totalModelsCount: results.length,
        modelNames,
        filteredSpecialModels,
        totalNameCharacters
    };
}
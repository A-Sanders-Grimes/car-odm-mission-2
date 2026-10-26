export function processCarData(rawData, brandName) {
    const results = rawData.Results || [];

    const validNames = results
        .map(item => item && typeof item.Model_Name === 'string' ? item.Model_Name.trim() : null)
        .filter(name => name !== null && name.length > 0);

    const uniqueSortedModels = [...new Set(validNames)].sort((a, b) => a.localeCompare(b));

    const groupedByInitial = uniqueSortedModels.reduce((acc, model) => {
        const initial = model.charAt(0).toUpperCase();
        if (!acc[initial]) {
            acc[initial] = [];
        }
        acc[initial].push(model);
        return acc;
    }, {});

    return {
        brand: brandName.toUpperCase(),
        totalModelsCount: uniqueSortedModels.length,
        uniqueSortedModels,
        groupedByInitial
    };
}

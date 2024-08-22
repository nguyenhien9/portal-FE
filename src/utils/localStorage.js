export const setItem = (key, value) => {
    try {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item)
    } catch (error) {
        console.log("Error on set item to localStorage", error)
    }
}

export const getItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        if (item === null) {
            return [];
        }
        const parsedItem = JSON.parse(item); // Chỉ gọi JSON.parse một lần
        return Array.isArray(parsedItem) ? parsedItem : [];
    } catch (error) {
        console.log("Error on get item from localStorage", error);
        return [];
    }
};


export const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing from localStorage", error);
    }
}
export const clearStorage = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.log("Error clearing localStorage", error);
    }
}
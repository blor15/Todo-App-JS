import BASE_URL from "./constant";

export const getTasks = async () => {
    try {
        const response = await fetch(`${BASE_URL}tasks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();
        console.log(data)
        return data
    }
    catch (error) {
        console.log('Problem reading' + ' ' + error)
        throw error;
    }
};


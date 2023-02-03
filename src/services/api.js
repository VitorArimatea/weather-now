const KEY = "8ba3419fc1dd4875ba6190954230302"

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`


    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()

    return data
}

export default fetchData
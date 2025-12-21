const countries = [
    { code: "CAN", name: "Australia", data: "English, French"},
    { code: "BEL", name: "Belgium", data: "Flemish, French, and German"},
    { code: "CHN", name: "China", data: "Mandarin"},
]


const cities = [
    { code: "NY", name: "New York", data: "US Eastern"},
    { code: "LA", name: "Los Angeles", data: "US Pacific"},
    { code: "DC", name: "Washington DC", data: "US Central"}
]

export const useGeneric = (id, type) => {
    if (type === "country") {
        const country = countries.find(country => country.code === id);
        const { code, ...countryWithoutId} = country;
        return  countryWithoutId;
    } else {
        const city = cities.find(city => city.code ===id);
        const { code, ...cityWithoutId} = city;
        return cityWithoutId;
    }
}
export const countries = [
    { code: "CAN", name: "Canada", data: "English, French"},
    { code: "BEL", name: "Belgium", data: "Flemish, French, and German"},
    { code: "CHN", name: "China", data: "Mandarin"},
]


export const cities = [
    { code: "NY", name: "New York", data: "US Eastern"},
    { code: "LA", name: "Los Angeles", data: "US Pacific"},
    { code: "DC", name: "Washington DC", data: "US Central"}
]

export const useFetch = (getData = () => {}) => getData();
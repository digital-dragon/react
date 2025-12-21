const countries = [
    { countryId: "CAN", countryI: "Australia", languageI: "English, French"},
    { countryId: "BEL", countryI: "Belgium", languageI: "Flemish, French, and German"},
    { countryId: "CHN", countryI: "China", languageI: "Mandarin"},
]

export const useLocation = ( id ) => {
    const country = countries.find(country => country.countryId === id);
    const { countryId, ...countryWithoutId} = country;
    return  countryWithoutId;
}
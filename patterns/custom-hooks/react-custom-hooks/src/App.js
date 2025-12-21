import logo from './logo.svg';
import './App.css';
import { useCurrentLocation } from './useCurrentLocation';
import { useLocation } from './useLocation';
import { useGeneric } from './useGeneric';
import { countries, cities, useFetch } from './useFetch';

function App() {
  const { country, continent } = useCurrentLocation();
  const { countryI, languageI } = useLocation("BEL");
  const { name, data } = useGeneric("LA", "city");

  const { name: name1, data: data1} = useFetch(() => {
    const country = countries.find(country => country.code === "CAN");
        const { code, ...countryWithoutId} = country;
        return  countryWithoutId;

  })

  return (
    <div className="App">
      <p style={{ background : "#fc95a0"}}>Your current location is {country}, {continent}</p>  
      <p style={{ background : "lightgreen"}}>Your current location is {countryI}, language(s) is/are {languageI}</p>
      <p style={{ background : "lightblue"}}>{name}, {data}</p> 
      <p style={{ background : "lightyellow"}}>{name1}, {data1}</p>          
    </div>
  );
}

export default App;

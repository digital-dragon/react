import logo from './logo.svg';
import './App.css';
import CurrentUserLoader from './CurrentUserLoader';
import { EnglishGreeting } from './EnglishGreeting';
import { GermanGreeting } from './GermanGreeting';
import { FrenchGreeting } from './FrenchGreeting';
import UserLoader from './UserLoader';
import { UserInfo } from './UserInfo'
import { CityInfo } from './CityInfo';
import ResourceLoader from './ResourceLoader';
import DataLoader, { users, cities } from './DataLoader';

function App() {
  return (
    <div className="App">
      <h6>********************Current User Loader Demo start********************</h6>
      <CurrentUserLoader>
        <EnglishGreeting />
        <GermanGreeting />
        <FrenchGreeting />
      </CurrentUserLoader>

      <h6>********************User Loader Demo start********************</h6>
      <UserLoader nationality="French">
        <UserInfo  />
      </UserLoader>
      <UserLoader nationality="German">
        <UserInfo  />
      </UserLoader>
      <UserLoader nationality="English">
        <UserInfo  />
      </UserLoader>

      <h6>********************Resource Loader Demo start********************</h6>
      <ResourceLoader resourceName="user" resourceId="German">
        <UserInfo  />
      </ResourceLoader>
      <UserLoader nationality="German">
        <UserInfo  />
      </UserLoader>
      <ResourceLoader resourceName="city" resourceId="France">
        <CityInfo  />
      </ResourceLoader>

      <h6>********************Data Loader Demo start********************</h6>
      <ResourceLoader resourceName="user" resourceId="German">
        <UserInfo  />
      </ResourceLoader>
      <DataLoader getData={() => users.find(u => u.nationality === "German")} resourceName="user">
        <UserInfo  />
      </DataLoader >
      <DataLoader getData={() => cities.find(u => u.country === "England")} resourceName="city">
        <CityInfo  />
      </DataLoader>

    </div>
  );
}

export default App;

import "./App.css";
import CurrentWeather from "./components/Current-Weather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
}

export default App;

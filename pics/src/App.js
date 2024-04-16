import SearchBar from "./Components/SearchBar";

function App() {
  const handleSumbit = (term) => {
    console.log("Do a search with ", term);
  };
  return (
    <div>
      <SearchBar onSumbit={handleSumbit} />
    </div>
  );
}

export default App;

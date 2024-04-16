function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default SearchBar;

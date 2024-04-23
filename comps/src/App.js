import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          Hello
        </Button>
      </div>
      <div>
        <Button warning>Buy</Button>
      </div>
      <div>
        <Button secondary>Hide Adds</Button>
      </div>
      <div>
        <Button primary outline>
          Hi1
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Hi2
        </Button>
      </div>
    </div>
  );
}

export default App;

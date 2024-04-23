import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudDownload />
          Buy
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Hide Adds
        </Button>
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

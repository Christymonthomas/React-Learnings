import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../Components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded className="mb-5">
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

export default ButtonPage;

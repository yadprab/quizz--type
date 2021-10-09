
import Img from "../images/undraw.png";
import { ISetstate } from "../Interfaces/interfac";
import { Chev } from "./Chev";
import { Logo } from "./Logo";

function Main({ setState }: { setState: ISetstate["setState"] }) {
  return (
    <>
      <main className="main--app">
        <div className="top--section">
          <nav>
            <Logo />
            <p>Grandmaster</p>
          </nav>
          <div className="image--section">
            <img src={Img} alt="Illustration" />
          </div>
        </div>

        <div className="bottom--section">
          <h1>Grab Life by the quiz </h1>
          <button
            className="start--button"
            onClick={() => {
              setState({ selected: true });
            }}
          >
            Start the Quizz <Chev />
          </button>
        </div>
      </main>
    </>
  );
}

export { Main };

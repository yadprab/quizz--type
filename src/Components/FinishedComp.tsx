import { ISetstate } from "../Interfaces/interfac";
import { Chev } from "./Chev";
import { Failure } from "./Failure";
import { Logo } from "./Logo";
import { Success } from "./Success";

const FinishedComp = ({
  score,
  total,
  setState,
}: {
  score: number;
  total: number;
  setState: ISetstate["setState"];
}) => {
  return (
    <div className="finished">
      <div className="top--section">
        <nav>
          <Logo />
          <p>Grandmaster</p>
        </nav>
        {score === 0 ? <Failure /> : <Success />}
      </div>
      <div className="bottom--section">
        <h1>Completed</h1>
        <div className="results">
          <p>Total Questions:{total}</p>
          <p>Total Correct Answers:{score}</p>
        </div>

        <button
          onClick={() => {
            setState({ selected: false });
          }}
        >
          Try again <Chev />
        </button>
      </div>
    </div>
  );
};

export { FinishedComp };

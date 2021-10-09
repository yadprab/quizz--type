import { ACTIONTYPES } from "../Interfaces/interfac";
import { Chev } from "./Chev";

const SubmitComp = ({
  isWrong,
  isCorrect,
  result,
  dispatch,
}: {
  isWrong: boolean;
  isCorrect: boolean;
  result: string;
  dispatch: React.Dispatch<ACTIONTYPES>;
}) => {
  return (
    <div className="submit--area">
      <p id={isWrong === true && !isCorrect ? "wrongAnswer" : "correctAnswer"}>
        {result}
      </p>
      <button
        id="next"
        onClick={() => {
          dispatch({ type: "next" });
        }}
      >
        Next
        <Chev />
      </button>
    </div>
  );
};

export { SubmitComp };

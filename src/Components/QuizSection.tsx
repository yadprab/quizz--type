import { MouseEvent, useReducer } from "react";
import { ACTIONTYPES, IInitial, ISetstate } from "../Interfaces/interfac";
import { data } from "./data";
import { FinishedComp } from "./FinishedComp";
import { Icons } from "./Icons";
import { Logo } from "./Logo";
import { SubmitComp } from "./SubmitComp";
import { SubmitArea } from "./SubmtAres";

const initialState: IInitial["state"] = {
  value: {
    count: 0,
    isFinished: false,
  },
  data: data,
  isSelected: false,
  isSubmit: false,
  isCancel: false,
  selectedAnswer: "",
  correctAnswer: "",
  result: "",
  isWrong: false,
  isCorrect: false,
  Attend: 0,
  Score: 0,
  total: data.length,
  className: "",
};

const reducer = (state: IInitial["state"], action: ACTIONTYPES) => {
  const copy = [...initialState.data];
  console.log(state);

  const opt = state.data[state.value.count].options.map((op) => {
    if (op.id === action.payload?.oId) {
      return {
        ...op,
        valueNotSelected: false,
        valueSelected: true,
      };
    } else {
      return {
        ...op,
        valueSelected: false,
        valueNotSelected: true,
      };
    }
  });

  switch (action.type) {
    case "selected":
      return {
        ...state,
        isSelected: true,
        selectedAnswer: action.payload?.selectedAns,
        correctAnswer: action.payload.correctAnswer,
        data: state.data.map((d) => {
          if (d.id === action.payload.qId) {
            return {
              ...d,
              options: opt,
            };
          } else {
            return d;
          }
        }),
      };

    case "cancel":
      return {
        ...state,
        isSelected: false,
        selectedAnswer: "",
        data: copy,
      };

    case "submit":
      return {
        ...state,

        isSelected: false,
        isCancel: false,
        isSubmit: true,
        isCorrect: state.correctAnswer === state.selectedAnswer && true,
        isWrong: state.correctAnswer !== state.selectedAnswer && true,
        Attend: state.Attend + 1,
        result:
          state.correctAnswer === state.selectedAnswer
            ? "correct Answer"
            : "wrong Answer",

        Score:
          state.correctAnswer === state.selectedAnswer
            ? state.Score + 1
            : state.Score,
      };

    case "next":
      return {
        ...state,
        isSelected: false,
        isCancel: false,
        isSubmit: false,
        isCorrect: false,
        isWrong: false,
        data: copy,

        result: "",
        value: {
          count:
            state.value.count < data.length - 1
              ? state.value.count + 1
              : state.value.count,

          isFinished: state.Attend === state.total ? true : false,
        },
      };

    default:
      return state;
  }
};

const QuizSection = ({ setState }: { setState: ISetstate["setState"] }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (e: MouseEvent, ct: string) => {
    const target = (e.target as HTMLButtonElement).parentElement?.id;
    const oTarget = (e.target as HTMLButtonElement).id;
    const ans = (e.target as HTMLButtonElement).innerText;

    dispatch({
      type: "selected",
      payload: {
        qId: target,
        oId: oTarget,
        selectedAns: ans,
        correctAnswer: ct,
      },
    });
  };

  return (
    <>
      <main className="quizz-area">
        <div className="top--section">
          <nav>
            <Logo />
            <p>Grandmaster</p>
          </nav>
          <div className="quiz--position">
            <div className="question--Area">
              <h1>{state.data[state.value.count].question}</h1>
              <div className="options">
                <ul>
                  {state.data[state.value.count].options.map((d) => {
                    return (
                      <li
                        key={d.id}
                        id={state.data[state.value.count].id}
                        onClick={(e) => {
                          handleClick(
                            e,
                            state.data[state.value.count].correctAnswer
                          );
                        }}
                      >
                        <button
                          className={`btn ${
                            d.valueSelected && state.isSelected
                              ? "selected"
                              : !d.valueSelected && state.isSelected
                              ? "notSelected"
                              : ""
                          } ${
                            d.isCorrectAns && state.isSubmit && d.valueSelected
                              ? "success"
                              : !d.isCorrectAns &&
                                state.isSubmit &&
                                d.valueSelected
                              ? "fail"
                              : d.isCorrectAns &&
                                state.isSubmit &&
                                !d.valueSelected
                              ? "success"
                              : ""
                          }`}
                          disabled={
                            (d.valueNotSelected && state.isSelected) ||
                            state.isSubmit
                          }
                          id={d.id}
                        >
                          {d.value}
                          {state.isSubmit && <Icons />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {state.isSelected && <SubmitArea dispatch={dispatch} />}
          {state.isSubmit && (
            <SubmitComp
              dispatch={dispatch}
              isCorrect={state.isCorrect}
              result={state.result}
              isWrong={state.isWrong}
            />
          )}
          {state.value.isFinished && (
            <FinishedComp
              score={state.Score}
              setState={setState}
              total={state.total}
            />
          )}
        </div>
      </main>
    </>
  );
};

export { QuizSection };

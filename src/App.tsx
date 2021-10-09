import { useState } from "react";
import { Main } from "./Components/Main";
import { QuizSection } from "./Components/QuizSection";
import { IState } from "./Interfaces/interfac";
import "./Styles/Styles.css";
function App() {
  const [state, setState] = useState<IState["state"]>({ selected: false });
  return (
    <div className="main--wrapper">
      {!state.selected ? (
        <Main setState={setState} />
      ) : (
        <QuizSection setState={setState} />
      )}
    </div>
  );
}

export default App;

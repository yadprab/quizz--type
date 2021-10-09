export type ACTIONTYPES =
  | {
      type: "selected";
      payload: {
        qId?: string;
        oId?: string;
        selectedAns: string;
        correctAnswer: string;
      };
    }
  | {
      type: "cancel";
      payload?: {
        qId?: string;
        oId?: string;
        selectedAns: string;
      };
    }
  | {
      type: "submit";
      payload?: {
        qId?: string;
        oId?: string;
        selectedAns: string;
      };
    }
  | {
      type: "next";
      payload?: {
        qId?: string;
        oId?: string;
        selectedAns: string;
      };
    };

export interface IState {
  state: {
    selected: boolean;
  };
}

export interface ISetstate {
  setState: React.Dispatch<React.SetStateAction<IState["state"]>>;
}

export interface IData {
  data: {
    id: string;
    question: string;
    options: {
      id: string;
      value: string;
      valueSelected: boolean;
      valueNotSelected: boolean;
      isCorrectAns: boolean;
    }[];
    correctAnswer: string;
  }[];
}

export interface IInitial {
  state: {
    value: {
      count: number;
      isFinished: boolean;
    };
    data: IData["data"];
    isSelected: boolean;
    isSubmit: boolean;
    isCancel: boolean;
    selectedAnswer?: string;
    correctAnswer?: string;
    result: string;
    isWrong: boolean;
    isCorrect: boolean;
    Attend: number;
    Score: number;
    total: number;
    className: string;
  };
}

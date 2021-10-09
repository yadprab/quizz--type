import React from "react";
import { ACTIONTYPES } from "../Interfaces/interfac";

const SubmitArea = ({
  dispatch,
}: {
  dispatch: React.Dispatch<ACTIONTYPES>;
}) => {
  return (
    <div className="submit--area">
      <button
        id="cancel"
        onClick={() => {
          dispatch({ type: "cancel" });
        }}
      >
        cancel
      </button>
      <button
        id="submit"
        onClick={() => {
          dispatch({ type: "submit" });
        }}
      >
        submit
      </button>
    </div>
  );
};

export { SubmitArea };

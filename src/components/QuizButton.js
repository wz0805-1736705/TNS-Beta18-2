import { createPopup } from "@typeform/embed";
import { PopupButton } from "@typeform/embed-react";
import "./Quiz.css";

// quiz popup button
const QuizButton = () => {
  return (
    <PopupButton
      id="https://form.typeform.com/to/a5pkC39o"
      className="my-button"
    >
      open form
    </PopupButton>
  );
};

export default QuizButton;

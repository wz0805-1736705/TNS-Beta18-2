import { Sidetab /* or Popover */ } from "react-typeform-embed";

const QuizButton = () => {
  return (
    <div className="sidetab" size={20}>
      <Sidetab id="a5pkC39o" buttonText="Take the quiz!">
        {/* <button className="btn">Open Sidetab</button> */}
      </Sidetab>
    </div>
  );
};
export default QuizButton;

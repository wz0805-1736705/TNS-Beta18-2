import React from "react";
// import "@typeform/embed/build/css/popup.css";
import { Widget } from "@typeform/embed-react";
import "./Quiz.css";

const QuizWidget = () => {
  return (
    <Widget
      id="https://form.typeform.com/to/a5pkC39o"
      style={{ width: "100%", height: "100%" }}
      className="my-form"
    />
  );
};

// class Quiz extends React.Component {
//   componentDidMount() {
//     const popup1 = typeformEmbed.createPopup(
//       "https://nhscore.typeform.com/to/a5pkC39o",
//       {
//         mode: "popup",
//         autoClose: 3000,
//         hideHeaders: true,
//         hideFooters: true,
//         onsubmit: function () {
//           console.log("Typeform successfully submitted");
//         },
//       }
//     );
//     document.getElementById("bt-popup").addEventListener("click", function () {
//       popup1.open();
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button id="bt-popup">Launch me</button>
//       </div>
//     );
//   }
// }

export default QuizWidget;

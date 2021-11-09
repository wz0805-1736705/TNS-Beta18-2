import React from "react";
import { Widget } from "react-typeform-embed";

const QuizWidget = () => {
  return <Widget id="a5pkC39o" height={700} />;
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

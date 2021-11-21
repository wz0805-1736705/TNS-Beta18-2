import React from "react";
// import { Form, Button } from "react-bootstrap";
import YoutubeEmbed from "./Video";
import QuizButton from "./QuizButton";

function aboutUs() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>The Neighborhood Score</h1>
        <p className="about">
          The Neighborhood Score was born out of one persistent question every
          homebuyer asks: "where will I love living?" <br />
          With so many of us moving for work, for love, or just for fun, we want
          to make sure you find a wonderful community wherever you land.
          <br />
          We use a unique combination of data and personalized quizzes to
          understand your wants and needs, making it easy to match you with a
          neighborhood you are proud to call home!
          <br />
          <ul>
            <li>
              We strive to be a one-stop shop for relevant data and information
              including home appreciation values, neighborhood crime rates,
              demographics, school quality, and even political affiliations of
              the community
            </li>
            <li>
              Buyers and renters can instantly discover and compare quality
              neighborhoods
            </li>
          </ul>
          Problem: Home buying is often subjective, with hand-wavy explanations
          from acquaintances and realtors about the best places to live. <br />
          Solution: As “enginerds” we love quantifying things, so we skip the
          generalities and get right to the details of what you really care
          about. Relevant statistics and interactive mapping are at your
          fingertips!
          <br /> In addition to our homebuyer research tool, we offer modernized
          and professional real estate services for a fast-paced world. Call or
          text today! Our responsive team would love to help you find your dream
          neighborhood.
        </p>
        <h1 style={{ textAlign: "center" }}>Why The Neighborhood Score ?</h1>
      </div>
      <YoutubeEmbed embedId="mGKxEnLda-A" />
      <QuizButton />
      <img
        className="footer_logo"
        alt="logo"
        src="little houses- full span.PNG"
        // className="d-inline-block mt-1"
      />
    </>
  );
}

export default aboutUs;

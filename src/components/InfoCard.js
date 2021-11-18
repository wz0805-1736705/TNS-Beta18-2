import React from "react";

function InfoCard() {
  return (
    <div class="cards">
      <div class="card">
        <img
          src={require("./city_images/city-1.jpg").default}
          alt=""
          class="infocardimage"
        />
        <p class="card-desc">
          Discover <br /> Houston
        </p>
      </div>
      <div class="card">
        <img
          src={require("./city_images/city-2.jpg").default}
          alt=""
          class="infocardimage"
        />
        <p class="card-desc">
          Discover <br /> Austin
        </p>
      </div>
      <div class="card">
        <img
          src={require("./city_images/city-3.jpg").default}
          alt=""
          class="infocardimage"
        />
        <p class="card-desc">
          Discover <br /> San Francisco
        </p>
      </div>
    </div>
  );
}

export default InfoCard;

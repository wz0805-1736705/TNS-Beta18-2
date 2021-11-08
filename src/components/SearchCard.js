import React, { Component } from "react";
// import { MDBInput } from "mdbreact";

export default function SearchCard() {
  return (
    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control"
              placeholder="City, State"
            ></input>
            <button type="button" class="btn btn-default">
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
            </button>
            <p class="text-right text-muted">
              Unsure about your search? Take a <a href="/quiz">free quiz</a>{" "}
              with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default class SearchCard extends Component {
//   componentDidMount() {
//     var countryStateInfo = {
//       USA: {
//         California: {
//           "Los Angeles": ["90001", "90002", "90003", "90004"],
//           "San Diego": ["92093", "92101"],
//         },
//         Texas: {
//           Dallas: ["75201", "75202"],
//           Austin: ["73301", "73344"],
//         },
//       },
//     };

//     const script = document.createElement("script");
//     script.innerHTML = window.onload = function search() {
//       //Get html elements
//       var countySel = document.getElementById("countySel");
//       var stateSel = document.getElementById("stateSel");
//       var citySel = document.getElementById("citySel");
//       var zipSel = document.getElementById("zipSel");

//       //Load countries
//       for (var country in countryStateInfo) {
//         countySel.options[countySel.options.length] = new Option(
//           country,
//           country
//         );
//       }

//       //County Changed
//       countySel.onchange = function () {
//         stateSel.length = 1; // remove all options bar first
//         citySel.length = 1; // remove all options bar first
//         zipSel.length = 1; // remove all options bar first

//         if (this.selectedIndex < 1) return; // done

//         for (var state in countryStateInfo[this.value]) {
//           stateSel.options[stateSel.options.length] = new Option(state, state);
//         }
//       };

//       //State Changed
//       stateSel.onchange = function () {
//         citySel.length = 1; // remove all options bar first
//         zipSel.length = 1; // remove all options bar first

//         if (this.selectedIndex < 1) return; // done

//         for (var city in countryStateInfo[countySel.value][this.value]) {
//           citySel.options[citySel.options.length] = new Option(city, city);
//         }
//       };

//       //City Changed
//       citySel.onchange = function () {
//         zipSel.length = 1; // remove all options bar first

//         if (this.selectedIndex < 1) return; // done

//         var zips =
//           countryStateInfo[countySel.value][stateSel.value][this.value];
//         for (var i = 0; i < zips.length; i++) {
//           zipSel.options[zipSel.options.length] = new Option(zips[i], zips[i]);
//         }
//       };
//     };

//     script.async = true;
//     document.body.appendChild(script);
//   }

//   render() {
//     return (
//       <div
//         class="container"
//         styles={{
//           backgroundImage: "url(/search-background.jpg)",
//           backgroundPosition: "70% 35%",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "500px",
//         }}
//       >
//         <div class="row height d-flex justify-content-center align-items-center">
//           <div class="col-md-8">
//             <div class="search">
//               {/* <i class="fa fa-search"></i> */}
//               <select id="countySel" size="1">
//                 <option value="" selected="selected">
//                   -- Select Country --
//                 </option>
//               </select>
//               <select id="stateSel" size="1">
//                 <option value="" selected="selected">
//                   -- Select State--
//                 </option>
//               </select>

//               <select id="citySel" size="1">
//                 <option value="" selected="selected">
//                   -- Select City--
//                 </option>
//               </select>

//               <select id="zipSel" size="1">
//                 <option value="" selected="selected">
//                   -- Select Zip--
//                 </option>
//               </select>

//               <p class="text-right text-muted">
//                 Unsure about your search? Take a free quiz with us!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

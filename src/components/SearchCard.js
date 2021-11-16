import React, { Component } from "react";
import { useRef, useState } from "react";
import { withRouter } from "react-router-dom";

const SearchCard = (props) => {
  const [state, setState] = useState({
    city: "",
    state: "",
    zipcode: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/neighborhood",
      state,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mainSearch">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search"></i>
              <div>
                <label>
                  City:
                  <input
                    name="city"
                    type="text"
                    value={state.city}
                    class="form-control"
                    onChange={handleInputChange}
                  ></input>
                </label>
              </div>
              <div>
                <label>
                  State:
                  <input
                    name="state"
                    type="text"
                    value={state.state}
                    class="form-control"
                    onChange={handleInputChange}
                  ></input>
                </label>
              </div>
              <div>
                <label>
                  Zip Code:
                  <input
                    name="zipcode"
                    type="text"
                    value={state.zipcode}
                    class="form-control"
                    onChange={handleInputChange}
                  ></input>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-default"
                  onClick={handleOnSubmit}
                >
                  <span
                    className="glyphicon glyphicon-search"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <p className="text-right text-muted">
                Unsure about your search? Take a <a href="/quiz">free quiz</a>{" "}
                with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchCard);

// export default class SearchCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // key1: "value1",
//       // key2: "value2",
//       // key3: "value3",
//     };
//     this.onInputchange = this.onInputchange.bind(this);
//     this.onSubmitForm = this.onSubmitForm.bind(this);
//   }
//   onInputchange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
//   onSubmitForm() {
//     // console.log(this.state);
//     const { city, state, zipcode } = this.state;
//     // UserInput(this.state);
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <div className="mainSearch">
//         <div className="container">
//           <div className="row height d-flex justify-content-center align-items-center">
//             <div className="col-md-8">
//               <div className="search">
//                 <i className="fa fa-search"></i>
//                 <div>
//                   <label>
//                     City:
//                     <input
//                       name="city"
//                       type="text"
//                       value={this.state.city}
//                       class="form-control"
//                       // placeholder="City"
//                       onChange={this.onInputchange}
//                     ></input>
//                   </label>
//                 </div>
//                 <div>
//                   <label>
//                     State:
//                     <input
//                       name="state"
//                       type="text"
//                       value={this.state.state}
//                       class="form-control"
//                       onChange={this.onInputchange}
//                     ></input>
//                   </label>
//                 </div>
//                 <div>
//                   <label>
//                     Zip Code:
//                     <input
//                       name="zipcode"
//                       type="text"
//                       value={this.state.zipcode}
//                       class="form-control"
//                       onChange={this.onInputchange}
//                     ></input>
//                   </label>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     className="btn btn-default"
//                     onClick={this.onSubmitForm}
//                   >
//                     <span
//                       className="glyphicon glyphicon-search"
//                       aria-hidden="true"
//                     ></span>
//                   </button>
//                 </div>
//                 <p className="text-right text-muted">
//                   Unsure about your search? Take a <a href="/quiz">free quiz</a>{" "}
//                   with us!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <UserInput
//           city={this.state.city}
//           state={this.state.state}
//           zipcode={this.state.zipcode}
//         />
//       </div>
//     );
//   }
// }

// // use state from the search card:
// export class UserInput extends Component {
//   render() {
//     console.log(this.props.city);
//     return <div>{this.props.city}</div>;
//   }
// }

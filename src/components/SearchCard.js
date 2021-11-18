import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchCard = (props) => {
  const [state, setState] = useState({
    city: "",
    state: "",
    zipcode: "",
  });

  const handleOnSubmit = (event) => {
    var stateInput = document.querySelector('#stateInput').value;
    if (!stateInput || stateInput.length < 2) {
      alert("Please enter valid state name.");
    } else {
      event.preventDefault();
      props.history.push({
        pathname: "/neighborhood",
        state,
      });
    }
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
                <input
                  name="city"
                  type="text"
                  value={state.city}
                  class="form-control"
                  onChange={handleInputChange}
                  placeholder="City"
                ></input>
              </div>
              <div>
                <input
                  name="state"
                  id="stateInput"
                  type="text"
                  value={state.state}
                  class="form-control"
                  onChange={handleInputChange}
                  placeholder="State"
                ></input>
              </div>
              <div>
                <input
                  name="zipcode"
                  type="text"
                  value={state.zipcode}
                  class="form-control"
                  onChange={handleInputChange}
                  placeholder="Zipcode"
                ></input>
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
              {/* <p className="text-right text-muted">
                Unsure about your search? Take a <a href="/quiz">free quiz</a>{" "}
                with us!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchCard);

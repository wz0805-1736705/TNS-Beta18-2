import React from "react";

function signUp() {
  return (
    <section class="vh-100" styles={{ "background-color": "#508bfc" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card shadow-2-strong"
              style={{ "border-radius": "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign Up</h3>
                {/* user name */}
                <div class="form-outline mb-4 text-left">
                  <input
                    type="text"
                    id="name"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="name">
                    User Name
                  </label>
                </div>
                {/* email */}
                <div class="form-outline mb-4 text-left">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX-2">
                    Email
                  </label>
                </div>
                {/* password */}
                <div class="form-outline mb-4 text-left">
                  <input
                    name="password"
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX-2">
                    Password
                  </label>
                </div>

                {/* confirm password */}
                {/* TODO: password validation */}
                <div class="form-outline mb-4 text-left">
                  <input
                    name="password"
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX-2">
                    Confirm Password
                  </label>
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signUp;

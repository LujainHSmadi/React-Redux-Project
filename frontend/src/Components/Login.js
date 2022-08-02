import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {login} from "../Store/Reducer/SignIn";

const SignIn = () => {
  const initialState = {
   
    email: "",
      password: "",

  };

  const [User, setUser] = useState(initialState);
  const [loggeduser, setLoggeduser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { email, password, role } = User;

    dispatch(login({ email, password, role }))
      .unwrap()
      .then((data) => {
        console.log(data);
         console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          roles: ["Admin"],
        });
        localStorage.setItem("user", JSON.stringify(data));
        
        let isLoggedIn = JSON.parse(localStorage.getItem("user"));
        
        console.log(isLoggedIn.logged_user.id)
        if (isLoggedIn.logged_user.role == "admin") {
          swal({
            title: "Admin!",

            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/";
          });
        } else {
          swal({
            title: "User!",
            text: "You are logged in!!",
            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/";
          });
        }

        setSubmitted(true);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {/* <!-- BREADCRUMB --> */}
      <div class="bg-theme-overlay">
        <section class="section__breadcrumb ">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="text-capitalize text-white">login</h2>
                <ul class="list-inline ">
                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      home
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      page
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* // <!-- END BREADCRUMB --> */}

      <div class="clearfix"></div>

      {/* // <!-- LISTING LIST --> */}
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- Form Login --> */}
              <div class="card mx-auto" style={{ maxWidth: "380px" }}>
                <div class="card-body">
                  <h4 class="card-title mb-4">Sign in</h4>

                  <a
                    href="#"
                    class="btn btn-facebook btn-block mb-2 text-white"
                  >
                    {" "}
                    <i class="fa fa-facebook"></i> &nbsp; Sign in with Facebook
                  </a>
                  <a href="#" class="btn btn-primary btn-block mb-4">
                    {" "}
                    <i class="fa fa-google"></i> &nbsp; Sign in with Google
                  </a>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Username"
                      type="email"
                      onChange={(event)=>handleInputChange(event)}
                      value={User.email || ""}
                      required
                      name="email"
                    />
                  </div>
                  {/* <!-- form-group// --> */}
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Password"
                      type="password"
                      onChange={handleInputChange}
                      value={User.password || ""}
                      required
                      name="password"
                    />
                  </div>
                  {/* <!-- form-group// --> */}

                  <div class="form-group">
                    <a href="#" class="float-right">
                      Forgot password?
                    </a>
                    <label class="float-left custom-control custom-checkbox">
                      {" "}
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        checked=""
                      />
                      <span class="custom-control-label"> Remember </span>
                    </label>
                  </div>
                  {/* <!-- form-group form-check .// --> */}
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      onClick={save}
                    >
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                  {/* <!-- form-group// --> */}
                </div>
                {/* <!-- card-body.// --> */}
              </div>
              {/* <!-- card .// --> */}

              <p class="text-center mt-4">
                Don't have account? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END LISTING LIST -->



    <!-- CALL TO ACTION --> */}
      <section class="cta-v1 py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-9">
              <h2 class="text-uppercase text-white">
                Looking To Sell Or Rent Your Property?
              </h2>
              <p class="text-capitalize text-white">
                We Will Assist You In The Best And Comfortable Property Services
                For You
              </p>
            </div>
            <div class="col-lg-3">
              <a href="#" class="btn btn-light text-uppercase ">
                request a quote
                <i class="fa fa-angle-right ml-3 arrow-btn "></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END CALL TO ACTION --> */}

 
    </>
  );
};
export default SignIn;

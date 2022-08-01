import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Register } from "../Store/Reducer/SignIn";
const SignUp = () => {
  const initialState = {
    email: "",
      password: "",
      name: '',
      role: 'user',
      image:'esraa'
  };

  const [User, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { name, email, password, role, image } = User;

    dispatch(Register({ name, email, password, role, image }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          role: data.role,
          image: data.image,
        });

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
                <h2 class="text-capitalize text-white">register</h2>
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
                      register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- END BREADCRUMB --> */}

      <div class="clearfix"></div>

      {/* <!-- LISTING LIST --> */}
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- Form Register --> */}

              <div class="card mx-auto" style={{ maxWidth: "520px" }}>
                <div class="card-body">
                  <h4 class="card-title mb-4">Sign in</h4>

                  <div class="form-row">
                    <div class="col form-group col-md-12">
                      <label>First name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        name="name"
                      />
                    </div>
                    <div class=" col form-group col-md-12">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder=""
                        onChange={handleInputChange}
                        name="email"
                      />
                      <small class="form-text text-muted"></small>
                    </div>
                  </div>

                  {/* <!-- form-row.// --> */}
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label>Create password</label>
                      <input
                        class="form-control"
                        type="password"
                        onChange={handleInputChange}
                        name="password"
                      />
                    </div>

                    <div class="form-group col-md-12">
                      <label>Repeat password</label>
                      <input class="form-control" type="password" />
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      onClick={save}
                      class="btn btn-primary btn-block"
                    >
                      {" "}
                      Register{" "}
                    </button>
                  </div>
                  {/* <!-- form-group// --> */}
                  <div class="form-group">
                    <label class="custom-control custom-checkbox">
                      {" "}
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        checked=""
                      />
                      <span class="custom-control-label">
                        {" "}
                        I am agree with <a href="#">
                          terms and contitions
                        </a>{" "}
                      </span>
                    </label>
                  </div>
                  {/* <!-- form-group end.// --> */}
                </div>
                {/* <!-- card-body.// --> */}
              </div>
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
   
   
    </>
  );
};
export default SignUp;

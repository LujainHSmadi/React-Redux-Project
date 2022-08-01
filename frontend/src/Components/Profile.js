
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Store/Reducer/SignIn";
import { Link, useParams } from "react-router-dom";
import Auth from "../Store//Services/Auth";

const Profile = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    id: null,
    name: "",
    email: "",
    image: "",
  };

  const [User, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const getUser = (id) => {
    Auth.get(`users/${isLoggedIn.logged_user.id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getUser(isLoggedIn.logged_user.id);
  }, [isLoggedIn.logged_user.id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const save = () => {
        dispatch(
          updateUser({ id: User.id, data: User })
        )
          .unwrap()
          .then((response) => {
            console.log(response);
            // setMessage("The tutorial was updated successfully!");
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
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        name="name"
                        value={User.name}
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder=""
                        onChange={handleInputChange}
                        name="email"
                        value={User.email}
                      />
                      <small class="form-text text-muted"></small>
                    </div>
                  </div>

                  {/* <!-- form-row.// --> */}
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label>image</label>
                      <input
                        class="form-control"
                        type="file"
                        onChange={handleInputChange}
                        name="image"
                    
                      />
                    </div>

                    {/* <div class="form-group col-md-6">
                        <label>Repeat password</label>
                        <input class="form-control" type="password" />
                      </div> */}
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

export default Profile
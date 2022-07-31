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
      {/* <!-- END CALL TO ACTION -->

    <!-- Footer  --> */}
      <footer>
        <div class="wrapper__footer bg-theme-footer">
          <div class="container">
            <div class="row">
              {/* <!-- ADDRESS --> */}
              <div class="col-md-4">
                <div class="widget__footer">
                  <figure>
                    <img
                      src="images/logo-blue.png"
                      alt=""
                      class="logo-footer"
                    />
                  </figure>
                  <p>
                    Rethouse Real Estate is a premium Property template based on
                    Bootstrap 4. Rethouse Real Estate helped thousands of
                    clients to find the right property for their needs.
                  </p>

                  <ul class="list-unstyled mb-0 mt-3">
                    <li>
                      {" "}
                      <b>
                        {" "}
                        <i class="fa fa-map-marker"></i>
                      </b>
                      <span>214 West Arnold St. New York, NY 10002</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fa fa-phone-square"></i>
                      </b>
                      <span>(123) 345-6789</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fa fa-phone-square"></i>
                      </b>
                      <span>(+100) 123 456 7890</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fa fa-headphones"></i>
                      </b>
                      <span>support@realvilla.demo</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <b>
                        <i class="fa fa-clock-o"></i>
                      </b>
                      <span>Mon - Sun / 9:00AM - 8:00PM</span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END ADDRESS -->

                <!-- QUICK LINKS --> */}
              <div class="col-md-4">
                <div class="widget__footer">
                  <h4 class="footer-title">Quick Links</h4>
                  <div class="link__category-two-column">
                    <ul class="list-unstyled ">
                      <li class="list-inline-item">
                        <a href="#">Commercial</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">business</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">House</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Residential</a>
                      </li>

                      <li class="list-inline-item">
                        <a href="#">Residential Tower</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Beverly Hills</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Los angeles</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">The beach</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Property Listing</a>
                      </li>

                      <li class="list-inline-item">
                        <a href="#">Clasic</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Modern Home</a>
                      </li>

                      <li class="list-inline-item">
                        <a href="#">Luxury</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Beach Pasadena</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- END QUICK LINKS -->


                <!-- NEWSLETTERS --> */}
              <div class="col-md-4">
                <div class="widget__footer">
                  <h4 class="footer-title">follow us </h4>
                  <p class="mb-2">
                    Follow us and stay in touch to get the latest news
                  </p>
                  <p>
                    <button class="btn btn-social btn-social-o facebook mr-1">
                      <i class="fa fa-facebook-f"></i>
                    </button>
                    <button class="btn btn-social btn-social-o twitter mr-1">
                      <i class="fa fa-twitter"></i>
                    </button>

                    <button class="btn btn-social btn-social-o linkedin mr-1">
                      <i class="fa fa-linkedin"></i>
                    </button>
                    <button class="btn btn-social btn-social-o instagram mr-1">
                      <i class="fa fa-instagram"></i>
                    </button>

                    <button class="btn btn-social btn-social-o youtube mr-1">
                      <i class="fa fa-youtube"></i>
                    </button>
                  </p>
                  <br />
                  <h4 class="footer-title">newsletter</h4>
                  {/* <!-- Form Newsletter --> */}
                  <div class="widget__form-newsletter ">
                    <p>
                      Don’t miss to subscribe to our news feeds, kindly fill the
                      form below
                    </p>
                    <div class="mt-3">
                      <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Your email address"
                      />

                      <button
                        class="btn btn-primary btn-block text-capitalize"
                        type="button"
                      >
                        subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END NEWSLETTER --> */}
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div class="bg__footer-bottom-v1">
          <div class="container">
            <div class="row flex-column-reverse flex-md-row">
              <div class="col-md-6">
                <span>
                  © 2020 Rethouse Real Estate - Premium real estate & theme
                  &amp; theme by
                  <a href="#">retenvi.com</a>
                </span>
              </div>
              <div class="col-md-6">
                <ul class="list-inline ">
                  <li class="list-inline-item">
                    <a href="#">privacy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">contact</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">about</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">faq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer  --> */}
      </footer>
    </>
  );
};
export default SignUp;

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
    dispatch(updateUser({ id: User.id, data: User }))
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

      <div class="wrapper">
        <div class="container">
          <div class="wraper">
            <div class="row">
              <div class="col-sm-12">
                <div class="bg-picture text-center">
                  <div class="bg-picture-overlay"></div>
                  <div class="profile-info-name">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      class="thumb-lg img-circle img-thumbnail"
                      alt="profile-image"
                    />
                    <h3 class="text-white">John Deon</h3>
                  </div>
                </div>
                {/* <!--/ meta --> */}
              </div>
            </div>
            <div class="row user-tabs">
              <div class="col-lg-6 col-md-9 col-sm-9">
                <ul class="nav nav-tabs tabs" style={{ width: "25%" }}>
                  <li class="active tab" style={{ width: "25%" }}>
                    <a
                      href="#home-2"
                      data-toggle="tab"
                      aria-expanded="false"
                      class="active"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-home"></i>
                      </span>
                      <span class="hidden-xs">About Me</span>
                    </a>
                  </li>
                  <li class="tab" style={{ width: "25%" }}>
                    <a
                      href="#profile-2"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-user"></i>
                      </span>
                      <span class="hidden-xs">Activities</span>
                    </a>
                  </li>
                  <li class="tab" style={{ width: "25%" }}>
                    <a
                      href="#messages-2"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-envelope-o"></i>
                      </span>
                      <span class="hidden-xs">Projects</span>
                    </a>
                  </li>
                  <li class="tab" style={{ width: "25%" }}>
                    <a
                      href="#settings-2"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-cog"></i>
                      </span>
                      <span class="hidden-xs">Settings</span>
                    </a>
                  </li>
                  <div
                    class="indicator"
                    style={{ right: "476px", left: "0px" }}
                  ></div>
                  <div
                    class="indicator"
                    style={{ right: "476px", left: "0px" }}
                  ></div>
                </ul>
                ,
              </div>
              <div class="col-lg-6 col-md-3 col-sm-3 hidden-xs">
                <div class="pull-right">
                  <div class="dropdown">
                    <a
                      data-toggle="dropdown"
                      class="dropdown-toggle btn-rounded btn btn-primary waves-effect waves-light"
                      href="#"
                    >
                      {" "}
                      Following <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
                      <li>
                        <a href="#">Poke</a>
                      </li>
                      <li>
                        <a href="#">Private message</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#">Unfollow</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="tab-content profile-tab-content">
                  <div class="tab-pane active" id="home-2">
                    <div class="row">
                      <div class="col-md-4">
                        {/* <!-- Personal-Information --> */}
                        <div class="panel panel-default panel-fill">
                          <div class="panel-heading">
                            <h3 class="panel-title">Personal Information</h3>
                          </div>
                          <div class="panel-body">
                            <div class="about-info-p">
                              <strong>Full Name</strong>
                              <br />
                              <p class="text-muted">Johnathan Deo</p>
                            </div>
                            <div class="about-info-p">
                              <strong>Mobile</strong>
                              <br />
                              <p class="text-muted">(123) 123 1234</p>
                            </div>
                            <div class="about-info-p">
                              <strong>Email</strong>
                              <br />
                              <p class="text-muted">
                                johnathandeon @moltran.com
                              </p>
                            </div>
                            <div class="about-info-p m-b-0">
                              <strong>Location</strong>
                              <br />
                              <p class="text-muted">USA</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Personal-Information -->

                                    <!-- Languages --> */}
                        <div class="panel panel-default panel-fill">
                          <div class="panel-heading">
                            <h3 class="panel-title">Languages</h3>
                          </div>
                          <div class="panel-body">
                            <ul>
                              <li>English</li>
                              <li>Franch</li>
                              <li>Greek</li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- Languages --> */}
                      </div>

                      <div class="col-md-8">
                        {/* <!-- Personal-Information --> */}
                        <div class="panel panel-default panel-fill">
                          <div class="panel-heading">
                            <h3 class="panel-title">Biography</h3>
                          </div>
                          <div class="panel-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </p>

                            <p>
                              <strong>
                                But also the leap into electronic typesetting,
                                remaining essentially unchanged.
                              </strong>
                            </p>

                            <p>
                              It was popularised in the 1960s with the release
                              of Letraset sheets containing Lorem Ipsum
                              passages, and more recently with desktop
                              publishing software like Aldus PageMaker including
                              versions of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                        {/* <!-- Personal-Information --> */}

                        <div class="panel panel-default panel-fill">
                          <div class="panel-heading">
                            <h3 class="panel-title">Skills</h3>
                          </div>
                          <div class="panel-body">
                            <div class="m-b-15">
                              <h5>
                                Angular Js <span class="pull-right">60%</span>
                              </h5>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-primary wow animated progress-animated"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width: "80%",
                                    visibility: "hidden",
                                    animationName: "none",
                                  }}
                                >
                                  <span class="sr-only">60% Complete</span>
                                </div>
                              </div>
                            </div>

                            <div class="m-b-15">
                              <h5>
                                Javascript <span class="pull-right">90%</span>
                              </h5>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-pink wow animated progress-animated"
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width: "80%",
                                    visibility: "hidden",
                                    animationName: "none",
                                  }}
                                >
                                  <span class="sr-only">90% Complete</span>
                                </div>
                              </div>
                            </div>

                            <div class="m-b-15">
                              <h5>
                                Wordpress <span class="pull-right">80%</span>
                              </h5>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-purple wow animated progress-animated"
                                  role="progressbar"
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width: "80%",
                                    visibility: "hidden",
                                    animationName: "none",
                                  }}
                                >
                                  <span class="sr-only">80% Complete</span>
                                </div>
                              </div>
                            </div>

                            <div class="m-b-0">
                              <h5>
                                HTML5 &amp; CSS3{" "}
                                <span class="pull-right">95%</span>
                              </h5>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-info wow animated progress-animated"
                                  role="progressbar"
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width: "95%",
                                    visibility: "hidden",
                                    animationName: "none",
                                  }}
                                >
                                  <span class="sr-only">95% Complete</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="profile-2">
                    {/* <!-- Personal-Information --> */}
                    <div class="panel panel-default panel-fill">
                      <div class="panel-body">
                        <div class="timeline-2">
                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">5 minutes ago</div>
                              <p>
                                <strong>
                                  <a href="#" class="text-info">
                                    John Doe
                                  </a>
                                </strong>{" "}
                                Uploaded a photo{" "}
                                <strong>"DSC000586.jpg"</strong>
                              </p>
                            </div>
                          </div>

                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">30 minutes ago</div>
                              <p>
                                <a href="" class="text-info">
                                  Lorem
                                </a>{" "}
                                commented your post.
                              </p>
                              <p>
                                <em>
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam laoreet tellus ut
                                  tincidunt euismod. "
                                </em>
                              </p>
                            </div>
                          </div>

                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">59 minutes ago</div>
                              <p>
                                <a href="" class="text-info">
                                  Jessi
                                </a>{" "}
                                attended a meeting with
                                <a href="#" class="text-success">
                                  John Doe
                                </a>
                                .
                              </p>
                              <p>
                                <em>
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam laoreet tellus ut
                                  tincidunt euismod. "
                                </em>
                              </p>
                            </div>
                          </div>

                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">5 minutes ago</div>
                              <p>
                                <strong>
                                  <a href="#" class="text-info">
                                    John Doe
                                  </a>
                                </strong>
                                Uploaded 2 new photos
                              </p>
                            </div>
                          </div>

                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">30 minutes ago</div>
                              <p>
                                <a href="" class="text-info">
                                  Lorem
                                </a>{" "}
                                commented your post.
                              </p>
                              <p>
                                <em>
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam laoreet tellus ut
                                  tincidunt euismod. "
                                </em>
                              </p>
                            </div>
                          </div>

                          <div class="time-item">
                            <div class="item-info">
                              <div class="text-muted">59 minutes ago</div>
                              <p>
                                <a href="" class="text-info">
                                  Jessi
                                </a>{" "}
                                attended a meeting with
                                <a href="#" class="text-success">
                                  John Doe
                                </a>
                                .
                              </p>
                              <p>
                                <em>
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam laoreet tellus ut
                                  tincidunt euismod. "
                                </em>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>

                  <div class="tab-pane" id="messages-2">
                    {/* <!-- Personal-Information --> */}
                    <div class="panel panel-default panel-fill">
                      <div class="panel-heading">
                        <h3 class="panel-title">My Projects</h3>
                      </div>
                      <div class="panel-body">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Assign</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-info">
                                    Work in Progress
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Moltran Frontend</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-success">
                                    Pending
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-pink">Done</span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Moltran Frontend</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-purple">
                                    Work in Progress
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-warning">
                                    Coming soon
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>

                  <div class="tab-pane" id="settings-2">
                    {/* <!-- Personal-Information --> */}
                    <div class="panel panel-default panel-fill">
                      <div class="panel-heading">
                        <h3 class="panel-title">Edit Profile</h3>
                      </div>
                      <div class="panel-body">
                        <form role="form">
                          <div class="form-group">
                            <label for="FullName">Full Name</label>
                            <input
                              type="text"
                              value="John Doe"
                              id="FullName"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="Email">Email</label>
                            <input
                              type="email"
                              value="first.last@example.com"
                              id="Email"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="Username">Username</label>
                            <input
                              type="text"
                              value="john"
                              id="Username"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="Password">Password</label>
                            <input
                              type="password"
                              placeholder="6 - 15 Characters"
                              id="Password"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="RePassword">Re-Password</label>
                            <input
                              type="password"
                              placeholder="6 - 15 Characters"
                              id="RePassword"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="AboutMe">About Me</label>
                            <textarea
                              style={{ height: "125px" }}
                              id="AboutMe"
                              class="form-control"
                            >
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat
                              volutpat. Ut wisi enim ad minim veniam, quis
                              nostrud exerci tation ullamcorper suscipit
                              lobortis nisl ut aliquip ex ea commodo consequat.
                            </textarea>
                          </div>
                          <button
                            class="btn btn-primary waves-effect waves-light w-md"
                            type="submit"
                          >
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Footer --> */}
            <footer class="footer text-right">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12">
                    <ul class="pull-right list-inline m-b-0">
                      <li>
                        <a href="https://bootdey.com">Bootdey.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
            {/* <!-- End Footer --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end wrapper --> */}
      </div>
    </>
  );
};

export default Profile;

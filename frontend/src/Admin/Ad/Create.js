import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { addAd } from "../redux/adSlice";
const Create = () => {


  const dispatch = useDispatch();
  const title = useRef(null);
  const description = useRef(null);
  const type = useRef(null);
  const image = useRef(null);
  const image_2 = useRef(null);
  const image_3 = useRef(null);
  const image_4 = useRef(null);
  const phone = useRef(null);
  const location = useRef(null);
  const ads = useSelector(state => state.ad);
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("description", description.current.value);
    formData.append("type", type.current.value);
    formData.append("image", image.current.files[0]);
    formData.append("image_2", image_2.current.files[0]);
    formData.append("image_3", image_3.current.files[0]);
    formData.append("image_4", image_4.current.files[0]);
    formData.append("phone", phone.current.value);
    formData.append("location", location.current.value);
    console.log(formData);
    console.log(image.current.files[0]);
    dispatch(addAd(formData));
    title.current.value = "";
    description.current.value = "";
    type.current.value = "";
    image.current.value = "";
    image_2.current.value = "";
    image_3.current.value = "";
    image_4.current.value = "";
    phone.current.value = "";
    location.current.value = "";
  }





  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}

        <Sidebar />
          {/* <!-- / Menu -->


      <!-- Layout container --> */}
          <div class="layout-page">
            {/* <!-- Navbar --> */}

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}

              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">Ads Form</span> 
                </h4>

                {/* <!-- Basic Layout & Basic with Icons --> */}
                <div class="row">
                  {/* <!-- Basic Layout --> */}
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Create Ads</h5>
                        <small class="text-muted float-end">
                          Default label
                        </small>
                      </div>
                      <div class="card-body">
                        <form onSubmit={handelSubmit}>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Title
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-name"
                                placeholder="John Doe"
                                ref={title}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-company"
                            >
                              Type
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-company"
                                placeholder="ACME Inc."
                               ref ={type}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-company"
                            >
                              Location
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-company"
                                placeholder="ACME Inc."
                                ref={location}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Phone No
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                                ref={phone}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-message"
                            >
                              Description
                            </label>
                            <div class="col-sm-10">
                              <textarea
                                id="basic-default-message"
                                class="form-control"
                                placeholder="Hi, Do you have a moment to talk Joe?"
                                aria-label="Hi, Do you have a moment to talk Joe?"
                                aria-describedby="basic-icon-default-message2"
                                ref={description}
                              ></textarea>
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Image
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="file"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                                ref={image}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Image 2
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="file"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                                ref={image_2}
                              />
                            </div>
                          </div>


                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Image 3
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="file"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                                ref={image_3}
                              />
                            </div>
                          </div>


                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Image 4
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="file"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                                ref={image_4}
                              />
                            </div>
                          </div>


                          <div class="row justify-content-end">
                            <div class="col-sm-10">
                              <button type="submit" class="btn btn-primary">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                  {/* <!-- Basic with Icons --> */}
                  {/* <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Basic with Icons</h5>
                        <small class="text-muted float-end">
                          Merged input group
                        </small>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-fullname"
                            >
                              Name
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-fullname2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-user"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basic-icon-default-fullname"
                                  placeholder="John Doe"
                                  aria-label="John Doe"
                                  aria-describedby="basic-icon-default-fullname2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-company"
                            >
                              Company
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-company2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-buildings"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-company"
                                  class="form-control"
                                  placeholder="ACME Inc."
                                  aria-label="ACME Inc."
                                  aria-describedby="basic-icon-default-company2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-email"
                            >
                              Email
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span class="input-group-text">
                                  <i class="bx bx-envelope"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  class="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                />
                                <span
                                  id="basic-icon-default-email2"
                                  class="input-group-text"
                                >
                                  @example.com
                                </span>
                              </div>
                              <div class="form-text">
                                You can use letters, numbers & periods
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 form-label"
                              for="basic-icon-default-phone"
                            >
                              Phone No
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-phone2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-phone"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-phone"
                                  class="form-control phone-mask"
                                  placeholder="658 799 8941"
                                  aria-label="658 799 8941"
                                  aria-describedby="basic-icon-default-phone2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 form-label"
                              for="basic-icon-default-message"
                            >
                              Message
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-message2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-comment"></i>
                                </span>
                                <textarea
                                  id="basic-icon-default-message"
                                  class="form-control"
                                  placeholder="Hi, Do you have a moment to talk Joe?"
                                  aria-label="Hi, Do you have a moment to talk Joe?"
                                  aria-describedby="basic-icon-default-message2"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-sm-10">
                              <button type="submit" class="btn btn-primary">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <!-- / Content -->

          <!-- Footer --> */}
<<<<<<< HEAD
              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    ©
                    <script>document.write(new Date().getFullYear());</script>
                    , made with ❤️ by
                    <a
                      href="https://themeselection.com"
                      target="_blank"
                      class="footer-link fw-bolder"
                    >
                      ThemeSelection
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://themeselection.com/license/"
                      class="footer-link me-4"
                      target="_blank"
                    >
                      License
                    </a>
                    <a
                      href="https://themeselection.com/"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      More Themes
                    </a>

                    <a
                      href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      Documentation
                    </a>

                    <a
                      href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </footer>
=======
           <Footer />
>>>>>>> 4ab845183f47b80393442c6dca910f2012987e9f
              {/* <!-- / Footer --> */}

              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}
    </>
  );
}
<<<<<<< HEAD
export default Create
=======
export default Create
>>>>>>> 4ab845183f47b80393442c6dca910f2012987e9f

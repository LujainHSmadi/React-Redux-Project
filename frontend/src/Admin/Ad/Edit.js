import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { editAd } from "../redux/adSlice";
// import { getAds } from "../redux/adSlice";
import { singleAd } from "../redux/adSlice";

const Create = () => {
  
  const title = useRef(null);
  const description = useRef(null);
  const type = useRef(null);
  const image = useRef(null);
  const image_2 = useRef(null);
  const image_3 = useRef(null);
  const image_4 = useRef(null);
  const phone = useRef(null);
  const location = useRef(null);
  const params = useParams();


  console.log('params ', params.id);
  
  
  const dispatch = useDispatch();
  const ads = useSelector(state => state.ad);
  console.log("Esraa",ads);
  // console.log("id esraa",ads[0].id);
  const loading = useSelector(state => state.ad.loading);

  useEffect(() => {
    dispatch(singleAd(params.id));
    console.log("single Ad", ads);

  }, [dispatch]);

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
    console.log("formdtaa",formData.get('title'));
    console.log(image.current.files[0]);
    dispatch(editAd(params,formData)).unwrap();

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
                                ref={title}
                              //  value={ads.ad.title}
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
                                ref={type}
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

                </div>
              </div>
              {/* <!-- / Content -->

          <!-- Footer --> */}
              <Footer />
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
export default Create

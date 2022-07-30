import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editAd } from "../redux/adSlice";
const Edit = () => {
  const dispatch = useDispatch();
  const allAds = useSelector(state => state.ad.ads);
  const { id } = useParams();
  let navigate = useNavigate();
  const [addData, setaddData] = useState({ title: "", description: "", type: "", phone: "", location: "", image: "",image_2:"",image_3:"",image_4:"" });
  let obj = {};

  allAds.forEach(element => {
    if (element.id == id) {
      obj['id'] = element.id;
      obj['title'] = element.name;
      obj['description'] = element.description;
      obj['type'] = element.type;
      obj['image'] = element.image;
      obj['image_2'] = element.image_2;
      obj['image_3'] = element.image_2;
      obj['image_4'] = element.image_4;
      obj['phone'] = element.phone;
      obj['location'] = element.location;

    }
  });

  useEffect(() => {
    setaddData(obj)
  }, [allAds]);


  const handleChange = (e) => {
    e.preventDefault()
    // const value = e.target.value;
    // setaddData({
    //   ...addData,
    //   [e.target.name]: value
    // })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // const value = e.target.value;
    // setaddData({
    //   ...addData,

    // })

    // dispatch(updateItem(addData));
    // navigate('/main', { replace: true })
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
                        <form >
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
          < Footer />
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
export default Edit;

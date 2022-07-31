import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../redux/adSlice";


const Table = () => {
  const dispatch = useDispatch();
  const ads = useSelector(state => state.ad.ads);
  const loading = useSelector(state => state.ad.loading);

  useEffect(() => {
    dispatch(getAds());

  }, [dispatch]);
  console.log("title", ads);
  
  const allads = ads.map(ad => { 
    return (
      <>
        <div class="col">
          <div class="card h-100">

            {/* image slider */}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={ ad.image } alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={ad.image_2} alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={ad.image_3} alt="Third slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={ad.image_4} alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            {/*  end of image slider */}
            <div class="card-body">
              <h5 class="card-title">{ad.title}</h5>
              <p class="card-text">
                {ad.description}
              </p>
            </div>
          </div>
        </div>
      </>

    )

  });

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
                  <span class="text-muted fw-light">Forms/</span> Horizontal
                  Layouts
                </h4>




                <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
                 {allads}
               
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
   

export default Table
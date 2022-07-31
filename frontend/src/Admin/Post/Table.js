
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
const Table = () => {

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
                  <div class="col">
                    <div class="card h-100">
                      {/* image slider */}
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://static-resources.mirai.com/wp-content/uploads/sites/1745/20211124094735/Joan-Mir%C3%B3.jpg" alt="First slide" />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://ae01.alicdn.com/kf/Hdfc51cd5a1664db692a422ec15245f555/The-Garden-By-Joan-Miro-Paintings-Canvas-Famous-ArtWork-Posters-and-Prints-Abstract-Art-Wall-Pictures.jpg_Q90.jpg_.webp" alt="Second slide" />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide" />
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
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>




                  <div class="col">
                    <div class="card h-100">
                      <img class="card-img-top" src="../assets/img/elements/18.jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                        </p>
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
   

export default Table
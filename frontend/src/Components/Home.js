import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../Admin/redux/adSlice";




const Home = () => {


    const dispatch = useDispatch();
    const ads = useSelector(state => state.ad.ads);

    useEffect(() => {
        dispatch(getAds());

    }, [dispatch]);
    console.log("title", ads);

    const allads = ads.map(ad => {
        return (
            <>
                     

                     
                                    <div class="col-md-4 col-lg-4">
                                        <div class="card__image card__box-v1">
                                            <div class="card__image-header h-250">
                                                <div class="ribbon text-capitalize">featured</div>
                                                <img src="images/600x400.jpg" alt="" class="img-fluid w100 img-transition" />
                                                <div class="info"> for sale</div>
                                            </div>
                                            <div class="card__image-body">
                                                <span class="badge badge-primary text-capitalize mb-2">house</span>
                                                <h6 class="text-capitalize">
                                                    vila in coral gables
                                                </h6>

                                                <p class="text-capitalize">
                                                    <i class="fa fa-map-marker"></i>
                                                    west flaminggo road, las vegas
                                                </p>
                                                <ul class="list-inline card__content">
                                                    <li class="list-inline-item">

                                                        <span>
                                                            baths <br />
                                                            <i class="fa fa-bath"></i> 2
                                                        </span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span>
                                                            beds <br />
                                                            <i class="fa fa-bed"></i> 3
                                                        </span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span>
                                                            rooms <br />
                                                            <i class="fa fa-inbox"></i> 3
                                                        </span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span>
                                                            area <br />
                                                            <i class="fa fa-map"></i> 4300 sq ft
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card__image-footer">
                                                <figure>
                                                    <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle" />
                                                </figure>
                                                <ul class="list-inline my-auto">
                                                    <li class="list-inline-item ">
                                                        <a href="#">
                                                            tom wilson
                                                        </a>

                                                    </li>

                                                </ul>
                                                <ul class="list-inline my-auto ml-auto">
                                                    <li class="list-inline-item">

                                                        <h6>$350.000</h6>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>



                             

                             



                               
                               
                               
                    


            </>)

    });

    return (

        <>


            {/* <!-- CAROUSEL --> */}
            <div class="slider-container">
                <div class="container-slider-image-full  ">
                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators d-none">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active banner-max-height">
                                <img class="d-block w-100" src="images/bg.jpg" alt="First slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="fadeInDown" data-delay=".2s" data-duration="1000ms"
                                                            class="text-white animated fadeInDown">
                                                            The #1 place for commercial
                                                            property</h2>
                                                        <p data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms"
                                                            class="text-white animated fadeInUp">

                                                            This is real estate website template based on Bootstrap 4 framework.
                                                        </p>
                                                        <a href="/list" data-animation="fadeInUp" data-delay=".6s"
                                                            data-duration="1000ms"
                                                            class="btn btn-primary text-uppercase animated fadeInUp">
                                                            properties
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item banner-max-height">
                                <img class="d-block w-100" src="images/bg15.jpg" alt="Second slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="animated fadeInDown"
                                                            class="text-white animated fadeInDown">
                                                            The #1 place for commercial
                                                            property</h2>
                                                        <p data-animation="animated fadeInUp"
                                                            class="text-white animated fadeInUp ">

                                                            This is real estate website template based on Bootstrap 4 framework.
                                                        </p>
                                                        <a href="/list" class="btn btn-primary text-uppercase animated fadeInUp">
                                                            properties
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item banner-max-height">
                                <img class="d-block w-100" src="images/bg19.jpg" alt="Third slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="animated fadeInDown"
                                                            class="text-white animated fadeInDown">
                                                            The #1 place for commercial
                                                            property</h2>
                                                        <p data-animation="animated fadeInUp"
                                                            class="text-white animated fadeInUp ">

                                                            This is real estate website template based on Bootstrap 4 framework.
                                                        </p>
                                                        <a href="#" class="btn btn-primary text-uppercase animated fadeInUp">
                                                            contact us
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="sr-only">Previous</span>
                        <span class="carousel-control-nav-prev">
                            <i class="fa fa-2x fa-angle-left"></i>
                        </span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="sr-only">Next</span>
                        <span class="carousel-control-nav-next">
                            <i class="fa fa-2x fa-angle-right"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div class="clearfix"></div>
            {/* <!-- END CAROUSEL --> */}
            <div class="clearfix"></div>


            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">
                                    featured properties
                                </h2>
                                <p class="text-center text-capitalize">handpicked exclusive properties by our team.</p>

                            </div>
                        </div>
                    </div>

                    {/* <!--=========================================
=            Section Gallery two            =
==========================================--> */}
                    <div class="card__image-filter">
                        <div class="filterizr-control">
                            <ul class="list-inline filterizr-filter">
                                <li class="list-inline-item filtr-active btn-filter" data-filter="all">All Property</li>

                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                         
                            <div class="tab-pane fade show active" id="pills-tab-two" role="tabpanel" aria-labelledby="pills-tab-two">
                 <div className="row">

                                  {allads}
                                  </div>
                        </div>
                    </div>
                   
                </div>
                </div>
            </section>


            {/* <!-- MOST POPULAR PLACES --> */}
            <section class="wrap__heading bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">
                                    most popular places
                                </h2>
                                <p class="text-center text-capitalize">find properties in these cities.</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-xl-5 col-padd">
                            {/* <!-- CARD IMAGE --> */}

                            <a href="#">
                                <div class="card__image-hover-style-v3">
                                    <div class="card__image-hover-style-v3-thumb h-475">
                                        <img src="images/amman.jpg" alt="" class="img-fluid w-100" />
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">Amman</h6>
                                            <p class="text-capitalize">70 properties</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-7 col-xl-7">
                            <div class="row">
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="#">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/irbid.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Irbid</h6>
                                                    <p class="text-capitalize">52 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="#">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/jerash.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Jerash</h6>
                                                    <p class="text-capitalize">46 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="#">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/madaba.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Madaba</h6>
                                                    <p class="text-capitalize">23 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="#">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/aqaba.png" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Aqaba</h6>
                                                    <p class="text-capitalize">50 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END MOST POPULAR PLACES -->



    <!-- VIDEO --> */}
            <section class="home__video bg-theme-v6">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 mx-auto">
                            <div class="home__video-area text-center">
                                <a href="#" class="play-video ">
                                    <i class="icon fa fa-play text-white"></i>
                                </a>
                                <h2 class="text-white">The #1 Place For Commercial Property</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END VIDEO -->


    <!-- BRAND PARTNER --> */}
            <section class="projects__partner bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">our partners</h2>
                                <p class="text-center text-capitalize">Brand Partners Successful Projects Trusted Many Clients
                                    Real Estate</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="projects__partner-logo">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo6.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo7.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo8.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo1.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo5.png" alt="" class="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END BRAND PARTNER --> */}




            {/* 
    <!-- BLOG --> */}
            <section class="blog__home bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">
                                    lastest news
                                </h2>
                                <p class="text-center text-capitalize">Find Of The Most Popular Real Estate Company All Around
                                    Indonesia.</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            {/* <!-- BLOG  --> */}
                            <div class="card__image">
                                <div class="card__image-header h-250">
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition" />
                                    <div class="info"> event</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span>
                                    <h6 class="text-capitalize">
                                        <a href="/blog-single.html">Best Interior Oppertunity </a>
                                    </h6>
                                    <p class=" mb-0">
                                        Real estate festival is one of the famous feval for explain to you how all this mistaolt
                                        deand praising pain
                                        wasnad I will give complete

                                    </p>


                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle" />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                        <li class="list-inline-item ">
                                            <a href="#">
                                                tom wilson
                                            </a>

                                        </li>

                                    </ul>
                                    <ul class="list-inline my-auto ml-auto">
                                        <li class="list-inline-item ">
                                            <a href="/blog-single.html" class="btn btn-sm btn-primary "><small
                                                class="text-white ">read more <i
                                                    class="fa fa-angle-right ml-1"></i></small></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* <!-- END BLOG --> */}
                        </div>
                        <div class="col-md-4">
                            {/* <!-- BLOG  --> */}
                            <div class="card__image">
                                <div class="card__image-header h-250">
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition" />
                                    <div class="info"> event</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span>
                                    <h6 class="text-capitalize">
                                        <a href="#">Tips & Trick buy real estate </a>
                                    </h6>
                                    <p class=" mb-0">
                                        Real estate festival is one of the famous feval for explain to you how all this mistaolt
                                        deand praising pain
                                        wasnad I will give complete

                                    </p>


                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle" />
                                    </figure>
                                    <ul class="list-inline my-auto">
                                        <li class="list-inline-item">
                                            <a href="#">
                                                tom wilson
                                            </a>

                                        </li>

                                    </ul>
                                    <ul class="list-inline my-auto ml-auto">
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-primary "><small class="text-white ">read more <i
                                                class="fa fa-angle-right ml-1"></i></small></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* <!-- END BLOG -->
                </div> */}
                            <div class="col-md-4">
                                {/* <!-- BLOG  --> */}
                                {/* <div class="card__image">
                        <div class="card__image-header h-250">
                            <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                            <div class="info"> event</div>
                        </div>
                        <div class="card__image-body">
                            <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> 
                            <h6 class="text-capitalize">
                                <a href="#">Our Must Popular Deluxe House </a>
                            </h6>
                            <p class=" mb-0">
                                Real estate festival is one of the famous feval for explain to you how all this mistaolt
                                deand praising pain
                                wasnad I will give complete

                            </p>


                        </div>
                        <div class="card__image-footer">
                            <figure>
                                <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
                            </figure>
                            <ul class="list-inline  my-auto">
                                <li class="list-inline-item">
                                    <a href="#">
                                        tom wilson
                                    </a>

                                </li>

                            </ul>
                            <ul class="list-inline  my-auto ml-auto">
                                <li class="list-inline-item">
                                    <a href="#" class="btn btn-sm btn-primary "><small class="text-white ">read more <i
                                                class="fa fa-angle-right ml-1"></i></small></a>
                                </li>

                            </ul>
                        </div>
                    </div> */}
                                {/* <!-- END BLOG --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END BLOG --> */}

            {/* <!-- CALL TO ACTION --> */}
            <section class="cta-v1 py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-9">
                            <h2 class="text-uppercase text-white">Looking For A Property To Buy Or Rent?</h2>
                            <p class="text-capitalize text-white">We Will Assist You In The Best And Comfortable Property
                                Services
                                For You
                            </p>

                        </div>
                        <div class="col-lg-3">
                            <a href="/list" class="btn btn-light text-uppercase ">Check Them Out
                                <i class="fa fa-angle-right ml-3 arrow-btn "></i></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END CALL TO ACTION --> */}

            {/* <!-- Footer  --> */}
            <footer>
                <div class="wrapper__footer bg-theme-footer">
                    <div class="container">
                        <div class="row">
                            {/* <!-- ADDRESS --> */}
                            <div class="col-md-4">
                                <div class="widget__footer">
                                    <figure>
                                        <img src="images/logo-blue.png" alt="" class="logo-footer" />
                                    </figure>
                                    <p>
                                        Rethouse Real Estate is a premium Property template based on Bootstrap 4. Rethouse Real
                                        Estate helped thousands of clients to find the right property for their needs.

                                    </p>

                                    <ul class="list-unstyled mb-0 mt-3">
                                        <li> <b> <i class="fa fa-map-marker"></i></b><span>214 West Arnold St. New York, NY
                                            10002</span> </li>
                                        <li> <b><i class="fa fa-phone-square"></i></b><span>(123) 345-6789</span> </li>
                                        <li> <b><i class="fa fa-phone-square"></i></b><span>(+100) 123 456 7890</span> </li>
                                        <li> <b><i class="fa fa-headphones"></i></b><span>support@realvilla.demo</span> </li>
                                        <li> <b><i class="fa fa-clock-o"></i></b><span>Mon - Sun / 9:00AM - 8:00PM</span> </li>
                                    </ul>
                                </div>

                            </div>
                            {/* <!-- END ADDRESS --> */}

                            {/* <!-- QUICK LINKS --> */}
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
                            {/* <!-- END QUICK LINKS --> */}


                            {/* <!-- NEWSLETTERS --> */}
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

                                            Don’t miss to subscribe to our news feeds, kindly fill the form below
                                        </p>
                                        <div class="mt-3">
                                            <input type="text" class="form-control mb-2" placeholder="Your email address" />

                                            <button class="btn btn-primary btn-block text-capitalize" type="button">subscribe

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
                                    © 2020 Rethouse Real Estate - Premium real estate & theme &amp; theme by
                                    <a href="#">retenvi.com</a>
                                </span>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-inline ">
                                    <li class="list-inline-item">
                                        <a href="#">
                                            privacy
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            contact
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            about
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            faq
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer  --> */}
            </footer>

            {/* <!-- SCROLL TO TOP --> */}
            <a href="javascript:" id="return-to-top"><i class="fa fa-chevron-up"></i></a>
        </>
    )
}
export default Home
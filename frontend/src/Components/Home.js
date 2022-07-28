const Home = () => {
    
    return(

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
                        <img class="d-block w-100" src="images/1920x1080.jpg" alt="First slide"/>
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
                                                <a href="#" data-animation="fadeInUp" data-delay=".6s"
                                                    data-duration="1000ms"
                                                    class="btn btn-primary text-uppercase animated fadeInUp">
                                                    contact us
                                                    <i class="fa fa-angle-right arrow-btn "></i></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item banner-max-height">
                        <img class="d-block w-100" src="images/1920x1080.jpg" alt="Second slide"/>
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
                    <div class="carousel-item banner-max-height">
                        <img class="d-block w-100" src="images/1920x1080.jpg" alt="Third slide"/>
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
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                <span class="carousel-control-nav-prev">
                    <i class="fa fa-2x fa-angle-left"></i>
                </span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    <div class="search__area bg-light">
        <div class="container">
            <div class="search__area-inner">
                <div class="row">
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Property Status">Property Status</option>
                                <option>For Sale</option>
                                <option>For Rent</option>

                            </select>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Property Type">Property Type</option>
                                <option>Residential</option>
                                <option>Commercial</option>
                                <option>Land</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Area From">Area From </option>
                                <option>1500</option>
                                <option>1200</option>
                                <option>900</option>
                                <option>600</option>
                                <option>300</option>
                                <option>100</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Locations">Locations</option>
                                <option>United Kingdom</option>
                                <option>American Samoa</option>
                                <option>Belgium</option>
                                <option>Canada</option>
                                <option>Delaware</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Japan</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Bedrooms">Bedrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3">
                        <div class="form-group">
                            <select class="wide select_option">
                                <option data-display="Bathrooms">Bathrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>


                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-3">
                        <div class="form-group">
                            <div class="filter__price">
                                <input class="price-range" type="text" name="my_range" value="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-3">
                        <div class="form-group">
                            <button class="btn btn-primary text-uppercase btn-block"> search <i
                                    class="fa fa-search ml-1"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

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
                        <li class="list-inline-item btn-filter" data-filter="1">Apartment</li>
                        <li class="list-inline-item btn-filter" data-filter="2">House</li>
                        <li class="list-inline-item btn-filter" data-filter="4">Office</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="filtr-container">

                        <div class="col-md-6 col-lg-4 filtr-item" data-category="2, 4" data-title="">

                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/600x400.jpg" alt="" class="img-fluid w100 img-transition"/>
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
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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
                        <div class="col-md-6 col-lg-4 filtr-item" data-category="4" data-title="">
                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                                    <div class="info"> for sale</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">house</span>
                                    <h6 class="text-capitalize">
                                        Ample Apartment At Last Floor
                                    </h6>

                                    <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                    </p>
                                    <ul class="list-inline card__content">
                                        <li class="list-inline-item">

                                            <span>
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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

                                            <h6>$350.000</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 filtr-item" data-category="1" data-title="">
                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                                    <div class="info"> for sale</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">house</span>
                                    <h6 class="text-capitalize">
                                        Contemporary Apartment
                                    </h6>

                                    <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                    </p>
                                    <ul class="list-inline card__content">
                                        <li class="list-inline-item">
                                            <span>
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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

                                            <h6>$350.000</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-4 filtr-item" data-category="2, 4" data-title="">
                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                                    <div class="info"> for sale</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">house</span>
                                    <h6 class="text-capitalize">
                                        Family Home For Sale
                                    </h6>

                                    <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                    </p>
                                    <ul class="list-inline card__content">
                                        <li class="list-inline-item">

                                            <span>
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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

                                            <h6>$350.000</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 filtr-item" data-category="1" data-title="">
                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                                    <div class="info"> for sale</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">house</span>
                                    <h6 class="text-capitalize">
                                        Luxury Villa With Pool
                                    </h6>

                                    <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                    </p>
                                    <ul class="list-inline card__content">
                                        <li class="list-inline-item">

                                            <span>
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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

                                            <h6>$350.000</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 filtr-item" data-category="1" data-title="">
                            <div class="card__image card__box-v1">
                                <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">featured</div>
                                    <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
                                    <div class="info"> for sale</div>
                                </div>
                                <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">house</span>
                                    <h6 class="text-capitalize">
                                        184 Lexington Avenue
                                    </h6>

                                    <p class="text-capitalize">
                                        <i class="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                    </p>
                                    <ul class="list-inline card__content">
                                        <li class="list-inline-item">

                                            <span>
                                                baths <br/>
                                                <i class="fa fa-bath"></i> 2
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                beds <br/>
                                                <i class="fa fa-bed"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                rooms <br/>
                                                <i class="fa fa-inbox"></i> 3
                                            </span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span>
                                                area <br/>
                                                <i class="fa fa-map"></i> 4300 sq ft
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card__image-footer">
                                    <figure>
                                        <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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

                                            <h6>$350.000</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
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
                                <img src="images/700x980.jpg" alt="" class="img-fluid w-100"/>
                            </div>
                            <div class="overlay">
                                <div class="desc">
                                    <h6 class="text-capitalize">tokyo</h6>
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
                                        <img src="images/600x400.jpg" alt="" class="img-fluid w-100"/>
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">australia</h6>
                                            <p class="text-capitalize">70 properties</p>
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
                                        <img src="images/600x400.jpg" alt="" class="img-fluid w-100"/>
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">rome</h6>
                                            <p class="text-capitalize">70 properties</p>
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
                                        <img src="images/600x400.jpg" alt="" class="img-fluid w-100"/>
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">new york</h6>
                                            <p class="text-capitalize">70 properties</p>
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
                                        <img src="images/600x400.jpg" alt="" class="img-fluid w-100"/>
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">london</h6>
                                            <p class="text-capitalize">70 properties</p>
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
                                <img src="images/partner-logo6.png" alt="" class="img-fluid"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="images/partner-logo7.png" alt="" class="img-fluid"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="images/partner-logo8.png" alt="" class="img-fluid"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="images/partner-logo1.png" alt="" class="img-fluid"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="images/partner-logo5.png" alt="" class="img-fluid"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END BRAND PARTNER --> */}

    {/* <!-- TESTIMONIAL --> */}
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-6 mx-auto">
                    <div class="title__head">
                        <h2 class="text-center text-capitalize">
                            what people says
                        </h2>
                        <p class="text-center text-capitalize">people says about walls property.</p>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="testimonial owl-carousel owl-theme">
                {/* <!-- TESTIMONIAL --> */}
                <div class="item testimonial__block">
                    <div class="testimonial__block-card bg-reviews">
                        <p>
                            Thank you walls property help me, choice dream home We were impressed with the build
                            quality, Plus they are competitively priced.
                        </p>
                    </div>
                    <div class="testimonial__block-users">
                        <div class="testimonial__block-users-img">
                            <img src="images/80x80.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="testimonial__block-users-name">
                            jhon doe <br/>
                            <span>owner, digital agency</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}
                <div class="item testimonial__block">
                    <div class="testimonial__block-card bg-reviews">
                        <p>
                            Thank you walls property help me, choice dream home We were impressed with the build
                            quality, Plus they are competitively priced.
                        </p>
                    </div>
                    <div class="testimonial__block-users">
                        <div class="testimonial__block-users-img">
                            <img src="images/80x80.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="testimonial__block-users-name">
                            jhon doe <br/>
                            <span>owner, digital agency</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}
                <div class="item testimonial__block">
                    <div class="testimonial__block-card bg-reviews">
                        <p>
                            Thank you walls property help me, choice dream home We were impressed with the build
                            quality, Plus they are competitively priced.
                        </p>
                    </div>
                    <div class="testimonial__block-users">
                        <div class="testimonial__block-users-img">
                            <img src="images/80x80.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="testimonial__block-users-name">
                            jhon doe <br/>
                            <span>owner, digital agency</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}
                <div class="item testimonial__block">
                    <div class="testimonial__block-card bg-reviews">
                        <p>
                            Thank you walls property help me, choice dream home We were impressed with the build
                            quality, Plus they are competitively priced.
                        </p>
                    </div>
                    <div class="testimonial__block-users">
                        <div class="testimonial__block-users-img">
                            <img src="images/80x80.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="testimonial__block-users-name">
                            jhon doe <br/>
                            <span>owner, digital agency</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END TESTIMONIAL --> */}
                {/* <!-- TESTIMONIAL --> */}
                <div class="item testimonial__block">
                    <div class="testimonial__block-card bg-reviews">
                        <p>
                            Thank you walls property help me, choice dream home We were impressed with the build
                            quality, Plus they are competitively priced.
                        </p>
                    </div>
                    <div class="testimonial__block-users">
                        <div class="testimonial__block-users-img">
                            <img src="images/80x80.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="testimonial__block-users-name">
                            jhon doe <br/>
                            <span>owner, digital agency</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END TESTIMONIAL --> */}

            </div>
        </div>
    </section>
    {/* <!-- END TESTIMONIAL --> */}


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
                            <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
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
                                <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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
                            <img src="images/500x400.jpg" alt="" class="img-fluid w100 img-transition"/>
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
                                <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
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
                    <h2 class="text-uppercase text-white">Looking To Sell Or Rent Your Property?</h2>
                    <p class="text-capitalize text-white">We Will Assist You In The Best And Comfortable Property
                        Services
                        For You
                    </p>

                </div>
                <div class="col-lg-3">
                    <a href="#" class="btn btn-light text-uppercase ">request a quote
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
                                <img src="images/logo-blue.png" alt="" class="logo-footer"/>
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
                                    <input type="text" class="form-control mb-2" placeholder="Your email address"/>

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
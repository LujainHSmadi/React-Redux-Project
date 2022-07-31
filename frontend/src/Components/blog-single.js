
const AgentsDetail =()=>{
    return (
      <>

                <div class="bg-theme-overlay">
            <section class="section__breadcrumb ">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 text-center">
                            <h2 class="text-capitalize text-white">about us</h2>
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
                                        about us
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


        {/* <!-- NAVBAR TOP --> */}
        <div class="topbar d-none d-sm-block">
            <div class="container ">
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div class="topbar-left">
                            <div class="topbar-text">
                                Monday, March 22, 2020
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div class="list-unstyled topbar-right">
                            <ul class="topbar-link">
                                <li><a href="#" title="">Career</a></li>
                                <li><a href="#" title="">Contact Us</a></li>
                                <li><a href="#" title="">Login / Register</a></li>
                            </ul>
                            <ul class="topbar-sosmed">
                                <li>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END NAVBAR TOP --> */}
        {/* <!-- NAVBAR --> */}
        <nav class="navbar navbar-hover navbar-expand-lg navbar-soft">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="images/logo-blue-stiky.png" alt="" class="img-fluid"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav99">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main_nav99">
                    <ul class="navbar-nav  mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link active dropdown-toggle" href="#" data-toggle="dropdown"> Home </a>
                            <ul class="dropdown-menu dropdown-menu-left animate fade-up">
                                <li><a class="dropdown-item" href="/homepage-v1.html"> Home version one </a>
                                </li>
                                <li><a class="dropdown-item" href="homepage-v2.html"> Home version two </a></li>
                                <li><a class="dropdown-item" href="/homepage-v3.html"> Home version three </a></li>
                                <li><a class="dropdown-item" href="/homepage-v4.html"> Home version four </a></li>
                                <li><a class="dropdown-item" href="/homepage-v5.html"> Home version five </a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Pages </a>
                            <ul class="dropdown-menu animate fade-up">

                                <li><a class="dropdown-item icon-arrow" href="#"> Property Listing </a>
                                    <ul class="submenu dropdown-menu  animate fade-up">
                                        <li><a class="dropdown-item" href="/listing-style-v1.html"> Style 1</a></li>
                                        <li><a class="dropdown-item" href="/listing-style-v2.html"> Style 2</a></li>
                                        <li><a class="dropdown-item" href="/listing-style-v3.html"> Style 3</a></li>
                                        <li><a class="dropdown-item" href="/listing-style-v4.html"> Style 4</a></li>
                                        <li><a class="dropdown-item" href="/listing-style-v5.html"> Style 5</a></li>
                                        <li><a class="dropdown-item icon-arrow" href="">Submenu item 3 </a>
                                            <ul class="submenu dropdown-menu  animate fade-up">
                                                <li><a class="dropdown-item" href="">Multi level 1</a></li>
                                                <li><a class="dropdown-item" href="">Multi level 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item" href="">Submenu item 4</a></li>
                                        <li><a class="dropdown-item" href="">Submenu item 5</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item icon-arrow" href="#"> Property single detail </a>
                                    <ul class="submenu dropdown-menu  animate fade-up">
                                        <li><a class="dropdown-item" href="/single-detail-v1.html">Style 1</a></li>
                                        <li><a class="dropdown-item" href="/single-detail-v2.html">Style 2</a></li>
                                        <li><a class="dropdown-item" href="/single-detail-v3.html">Style 3</a></li>
                                        <li><a class="dropdown-item" href="/single-detail-v4.html">Style 4</a></li>
                                        <li><a class="dropdown-item" href="/single-detail-v5.html">Style 5</a></li>
                                    </ul>

                                </li>

                                <li><a class="dropdown-item icon-arrow" href="#"> Agent </a>
                                    <ul class="submenu dropdown-menu  animate fade-up">
                                        <li><a class="dropdown-item" href="/agents-v1.html">Style 1</a></li>
                                        <li><a class="dropdown-item" href="/agents-v2.html">Style 2</a></li>
                                        <li><a class="dropdown-item" href="/agents-detail.html">Agent detail</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item icon-arrow" href="#"> Agency </a>
                                    <ul class="submenu dropdown-menu  animate fade-up">
                                        <li><a class="dropdown-item" href="/agency-v1.html">Style 1</a></li>
                                        <li><a class="dropdown-item" href="/agency-v2.html">Style 2</a></li>
                                        <li><a class="dropdown-item" href="/agency-detail.html">Agency detail</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="/about-us.html">About us </a>
                                <li><a class="dropdown-item" href="/login.html">Login </a>
                                <li><a class="dropdown-item" href="/register.html"> Register </a>
                                <li><a class="dropdown-item" href="/contact.html"> Contact </a>
                                <li><a class="dropdown-item" href="/404.html"> 404 Error </a>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link active dropdown-toggle" href="#" data-toggle="dropdown"> Blog </a>
                            <ul class="dropdown-menu dropdown-menu-left animate fade-up">
                                <li><a class="dropdown-item" href="/blog.html"> Blog </a>
                                </li>
                                <li><a class="dropdown-item" href="/blog-single.html"> Blog Single </a></li>

                            </ul>
                        </li>

                        <li class="nav-item"><a class="nav-link" href="/contact.html"> contact </a></li>
                    </ul>


                    {/* <!-- Search bar.// --> */}
                    <ul class="navbar-nav">
                        <li>
                            <a href="#" class="btn btn-primary text-capitalize">
                                <i class="fa fa-plus-circle mr-1"></i> add listing</a>
                        </li>
                    </ul>
                    {/* <!-- Search content bar.// --> */}
                    <div class="top-search navigation-shadow">
                        <div class="container">
                            <div class="input-group ">
                                <form action="#">

                                    <div class="row no-gutters mt-3">
                                        <div class="col">
                                            <input class="form-control border-secondary border-right-0 rounded-0"
                                                type="search" value="" placeholder="Search " id="example-search-input4">
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                                                href="/search-result.html">
                                                <i class="fa fa-search"></i>
                                            </a>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Search content bar.// --> */}
                </div> 
            </div>
        </nav>
        {/* <!-- END NAVBAR -->
        <!-- BREADCRUMB --> */}
        <div class="bg-theme-overlay">
            <section class="section__breadcrumb ">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 text-center">
                            <h2 class="text-capitalize text-white">blog single</h2>
                            <ul class="list-inline ">
                                <li class="list-inline-item">
                                    <a href="#" class="text-white">
                                        home
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-white">
                                        blog
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-white">
                                        blog single
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* <!-- END BREADCRUMB --> */}
    </header>
    <div class="clearfix"></div>

    {/* <!-- LISTING LIST --> */}
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="single__blog-detail">
                        <h1>
                            Tips And Tricks To Have Your Dream Home At A Low Cost
                        </h1>

                        <div class="single__blog-detail-info">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <figure class="image-profile">
                                        <img src="images/80x80.jpg" class="img-fluid" alt=""/>
                                    </figure>
                                </li>
                                <li class="list-inline-item">

                                    <span>
                                        by
                                    </span>
                                    <a href="#">
                                        john doe,
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <span class="text-dark text-capitalize ml-1">
                                        descember 09, 2016
                                    </span>
                                </li>

                                <li class="list-inline-item">
                                    <span class="text-dark text-capitalize ml-1">
                                        in
                                    </span>
                                    <a href="#">
                                        business
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure>
                            <img src="images/1920x1080.jpg" class="img-fluid" alt=""/>
                        </figure>

                        <p class="drop-cap">
                            The European languages are members of the same family. Their separate existence is a myth.
                            For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                            in their grammar, their pronunciation and their most common words. Everyone realizes why a
                            new common language would be desirable: one could refuse to pay expensive translators.
                        </p>


                        <p>
                            To achieve this, it would be necessary to have uniform grammar, pronunciation and more
                            common
                            words. If several languages coalesce, the grammar of the resulting language is more simple
                            and
                            regular than that of the individual languages. The new common language will be more simple
                            and
                            regular than the existing European languages. It will be as simple as Occidental; in fact,
                            it
                            will be Occidental. To an English person, it will seem like simplified English, as a
                            skeptical
                            Cambridge friend of mine told me what Occidental is.
                        </p>

                        {/* <!-- BLOCKQUOTE --> */}
                        <blockquote class="block-quote">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at
                                its layout.
                            </p>
                            <cite>
                                Tom Cruise
                            </cite>
                        </blockquote>
                        {/* <!-- END BLOCKQUOTE --> */}

                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean. A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                        </p>



                        {/* <!-- TAGS --> */}
                        <div class="blog__tags mb-4">
                            <ul class="list-inline">

                                <li class="list-inline-item">
                                    <a href="#">
                                        #property
                                    </a>
                                </li>


                                <li class="list-inline-item">
                                    <a href="#">
                                        #real estate
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        #listing
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        #rent
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        #sell
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- END TAGS --> */}

                        {/* <!-- AUTHOR -->
                        <!-- Profile author --> */}
                        <div class="wrap__profile">
                            <div class="wrap__profile-author">
                                <figure>
                                    <img src="images/80x80.jpg" alt="" class="img-fluid img-circle"/>
                                </figure>
                                <div class="wrap__profile-author-detail">
                                    <div class="wrap__profile-author-detail-name">author</div>
                                    <h5>jhon doe</h5>
                                    <p>Hi, nice to meet you let me introduce for you, I am Jhon Doe freelancer designer
                                        & web programmer from
                                        indonesia,
                                        base lampung</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-social btn-social-o facebook ">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-social btn-social-o twitter ">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-social btn-social-o instagram ">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-social btn-social-o telegram ">
                                                <i class="fa fa-telegram"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-social btn-social-o linkedin ">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- END AUTHOR -->


                        <div class="row">
                            <div class="col-md-6">
                                <div class="single_navigation-prev">
                                    <a href="#">
                                        <span>previous post</span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, similique.
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single_navigation-next text-left text-md-right">
                                    <a href="#">
                                        <span>next post</span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, nesciunt.
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>

                        {/* <!-- COMMENTS --> */}
                        <h6>3 Comments:</h6>
                        <div class="single__detail-features-review">
                            <div class="media mt-4">
                                <img class="mr-3 img-fluid rounded-circle" src="images/80x80.jpg" alt=""/>
                                <div class="media-body">
                                    <h6 class="mt-0">Jhon doe</h6>
                                    <span class="mb-3">Mei 13, 2020</span>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                        <li class="list-inline-item">3/5</li>
                                    </ul>
                                    <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec
                                        lacinia congue felis in faucibus.</p>

                                    <div class="media mt-4">
                                        <a class="pr-3" href="#">
                                            <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle"/>
                                        </a>
                                        <div class="media-body">
                                            <h6 class="mt-0">Christine </h6>
                                            <span class="mb-3">Mei 13, 2020</span>
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <i class="fa fa-star selected"></i>
                                                    <i class="fa fa-star selected"></i>
                                                    <i class="fa fa-star selected"></i>
                                                    <i class="fa fa-star selected"></i>
                                                    <i class="fa fa-star selected"></i>
                                                </li>
                                                <li class="list-inline-item">5/5</li>
                                            </ul>
                                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="media mt-4">
                                <img class="mr-3 img-fluid rounded-circle" src="images/80x80.jpg" alt=""/>
                                <div class="media-body">
                                    <h6 class="mt-0">Jhon Doe</h6>
                                    <span class="mb-3">Mei 13, 2020</span>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                        </li>
                                        <li class="list-inline-item">5/5</li>
                                    </ul>
                                    <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec
                                        lacinia congue felis in faucibus.</p>


                                </div>
                            </div>
                            {/* <!-- COMMENT --> */}
                            <hr/>
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-2">Your rating for this listing:</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star selected"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                        <li class="list-inline-item">3/5</li>
                                    </ul>
                                    <div class="form-group">
                                        <label>Your Name</label>
                                        <input type="text" class="form-control" required="required"/>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>What's your Email?</label>
                                        <input type="email" class="form-control" required="required"/>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" class="form-control" required="required"/>

                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Your message</label>
                                        <textarea class="form-control" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary float-right "> Submit review <i
                                    class="fa fa-paper-plane ml-2"></i></button>
                            {/* <!-- END COMMENT --> */}

                        </div>
                        {/* <!-- END COMMENTS --> */}
                    </div>
                </div>
                {/* <!-- WIDGET BLOG --> */}
                <div class="col-lg-4">
                    <div class="sticky-top">
                        <aside>
                            <div class="widget__sidebar mt-0">
                                <div class="widget__sidebar__header">
                                    <h6 class="text-capitalize">search</h6>
                                </div>
                                <div class="widget__sidebar__body">
                                    <div class="input-group">
                                        <input type="text" name="search_term_string" class="form-control"
                                            placeholder="Search article . . .">
                                        <span class="input-group-btn">
                                            <button type="submit" class="btn-search btn"><i
                                                    class="fa fa-search"></i></button>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </aside>
                        <aside>
                            <div class="widget__sidebar">
                                <div class="widget__sidebar__header">
                                    <h6 class="text-capitalize">category</h6>
                                </div>
                                <div class="widget__sidebar__body">
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                apartement
                                                <span class="badge badge-primary">14</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                villa
                                                <span class="badge badge-primary">4</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                family house
                                                <span class="badge badge-primary">2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                modern villa
                                                <span class="badge badge-primary">8</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                town house
                                                <span class="badge badge-primary">10</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-capitalize">
                                                office
                                                <span class="badge badge-primary">12</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </aside>
                        <aside>
                            <div class="widget__sidebar">
                                <div class="widget__sidebar__header">
                                    <h6 class="text-capitalize">recents news</h6>
                                </div>
                                <div class="widget__sidebar__body">
                                    <!-- ONE -->
                                    <div class="widget__sidebar__body-img">
                                        <img src="images/500x400.jpg" alt="" class="img-fluid">
                                        <div class="widget__sidebar__body-heading">
                                            <h6 class="text-capitalize">
                                                tips memilih rumah bagi kelurga muda
                                            </h6>
                                        </div>
                                        <span class="badge badge-secondary p-1 text-capitalize mb-1">May 08, 2019
                                        </span>
                                    </div>
                                    <!-- TWO -->
                                    <div class="widget__sidebar__body-img">
                                        <img src="images/500x400.jpg" alt="" class="img-fluid">

                                        <div class="widget__sidebar__body-heading">
                                            <h6 class="text-capitalize">
                                                tips memilih rumah bagi kelurga muda
                                            </h6>

                                        </div>
                                        <span class="badge badge-secondary p-1 text-capitalize mb-1">May 08, 2019
                                        </span>
                                    </div>
                                    <!-- THREE -->
                                    <div class="widget__sidebar__body-img">
                                        <img src="images/500x400.jpg" alt="" class="img-fluid">

                                        <div class="widget__sidebar__body-heading">
                                            <h6 class="text-capitalize">
                                                twe are experience more than 10 years
                                            </h6>

                                        </div>
                                        <span class="badge badge-secondary p-1 text-capitalize mb-1">May 08, 2019
                                        </span>
                                    </div>
                                    <!-- FOUR -->
                                    <div class="widget__sidebar__body-img">
                                        <img src="images/500x400.jpg" alt="" class="img-fluid">

                                        <div class="widget__sidebar__body-heading">
                                            <h6 class="text-capitalize">
                                                tips & trick in real estate
                                            </h6>

                                        </div>
                                        <span class="badge badge-secondary p-1 text-capitalize mb-1">May 08, 2019
                                        </span>
                                    </div>

                                    <div class="widget__sidebar__body-img">
                                        <img src="images/500x400.jpg" alt="" class="img-fluid">

                                        <div class="widget__sidebar__body-heading">
                                            <h6 class="text-capitalize">
                                                how buy real estate dream house
                                            </h6>
                                        </div>
                                        <span class="badge badge-secondary p-1 text-capitalize mb-1">May 08, 2019
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside>
                            <div class="widget__sidebar">
                                <div class="widget__sidebar__header">
                                    <h6 class="text-capitalize">tags</h6>
                                </div>
                                <div class="widget__sidebar__body">
                                    <div class="blog__tags p-0">
                                        <ul class="list-inline">

                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #property
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #wfh
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #estate
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #real estate
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #listing
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #rent
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #sell
                                                </a>
                                            </li>

                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #family
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #happy
                                                </a>
                                            </li>

                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #agents
                                                </a>
                                            </li>

                                            <li class="list-inline-item">
                                                <a href="#">
                                                    #promo
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <!-- END WIDGET BLOG -->
        </div>
    </section>
    <!-- END LISTING LIST -->


    <!-- CALL TO ACTION -->
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
    <!-- END CALL TO ACTION -->

    <!-- Footer  -->
    <footer>
        <div class="wrapper__footer bg-theme-footer">
            <div class="container">
                <div class="row">
                    <!-- ADDRESS -->
                    <div class="col-md-4">
                        <div class="widget__footer">
                            <figure>
                                <img src="images/logo-blue.png" alt="" class="logo-footer">
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
                    <!-- END ADDRESS -->

                    <!-- QUICK LINKS -->
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
                    <!-- END QUICK LINKS -->


                    <!-- NEWSLETTERS -->
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
                            <br>
                            <h4 class="footer-title">newsletter</h4>
                            <!-- Form Newsletter -->
                            <div class="widget__form-newsletter ">
                                <p>

                                    Don’t miss to subscribe to our news feeds, kindly fill the form below
                                </p>
                                <div class="mt-3">
                                    <input type="text" class="form-control mb-2" placeholder="Your email address">

                                    <button class="btn btn-primary btn-block text-capitalize" type="button">subscribe

                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- END NEWSLETTER -->
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
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
        <!-- End Footer  -->
    </footer>





    <!-- SCROLL TO TOP -->
    <a href="javascript:" id="return-to-top"><i class="fa fa-chevron-up"></i></a>
    <!-- END SCROLL TO TOP -->
    <script src="./js/index.bundle.js?fd365619e86ad9137a29"></script>

</body>

</html>
)
}
export default AgencyDetails;
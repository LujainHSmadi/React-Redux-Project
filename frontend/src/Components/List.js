import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../Admin/redux/adSlice";
import { Link } from "react-router-dom";

const List = ()=>{

  const dispatch = useDispatch();
  const ads = useSelector(state => state.ad.ads);

  useEffect(() => {
      dispatch(getAds());

  }, [dispatch]);


  const allads = ads.map(ad => {
      return (
          <>
                  
                  <div class="col-md-6 col-lg-6">
                        
         
                                        <div class="card__image card__box-v1">
                                            <div class="card__image-header h-250">
                                                <div class="ribbon text-capitalize">featured</div>
                                                 <Link to={"SingleDetail/" + ad.id}>
                                                <img src={'http://127.0.0.1:8000/image/'+ad.image} alt="" class="img-fluid w100 img-transition" />
                                                <div class="info"> for sale</div>
                                                 </Link>
                                            </div>
                                            <div class="card__image-body">
                                                <span class="badge badge-primary text-capitalize mb-2">{ad.type}</span>
                                                <h6 class="text-capitalize">
                                                  {ad.title}
                                                </h6>

                                                <p class="text-capitalize">
                                                    <i class="fa fa-map-marker"></i>
                                                    {ad.location}
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
                                            {/* <div class="card__image-footer">
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
                                            </div> */}
                                        </div>
                                    </div>


   </> )

});






    return (
      <>
        <div class="bg-theme-overlay">
          <section class="section__breadcrumb ">
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-md-8 text-center">
                  <h2 class="text-capitalize text-white">Properties  Listing</h2>
                  <ul class="list-inline ">
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        home
                      </a>
                    </li>
                
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                       Proprities Listing
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
              <div class="col-lg-4">
                {/* <!-- FORM FILTER --> */}
                <div class="products__filter mb-30">
                  <div class="products__filter__group">
                    <div class="products__filter__header">
                      <h5 class="text-center text-capitalize">
                        property filter
                      </h5>
                    </div>
                    <div class="products__filter__body">
                      
                    
                  
                     
                 
                  
                      <div class="form-group">
                        <label class="mb-3">property Type</label>
                        <div class="filter__price">
                          <input
                            class="price-range"
                            type="text"
                            name="my_range"
                            value=""
                            placeholder="search..."
                          />
                        </div>
                      </div>


                      <div class="form-group">
                        <label class="mb-3">property Location</label>
                        <div class="filter__price">
                          <input
                            class="price-range"
                            type="text"
                            name="my_range"
                            value=""
                            placeholder="amman.."
                          />
                        </div>
                      </div>

                      <div class="form-group mb-0 mt-2">
                        <a
                          class="btn btn-outline-primary btn-block text-capitalize advanced-filter"
                          data-toggle="collapse"
                          href="#multiCollapseExample1"
                          aria-controls="multiCollapseExample1"
                        >
                          <i class="fa fa-plus-circle"></i> advanced filter
                        </a>

                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample1"
                        >
                          <div class="advancedfilter">
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox2" type="checkbox" />
                              <label
                                for="checkbox2"
                                class="label-brand text-capitalize"
                              >
                                Air Conditioning
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox3" type="checkbox" />
                              <label
                                for="checkbox3"
                                class="label-brand text-capitalize"
                              >
                                Swiming Pool
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox4" type="checkbox" />
                              <label
                                for="checkbox4"
                                class="label-brand text-capitalize"
                              >
                                Central Heating
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox5" type="checkbox" />
                              <label
                                for="checkbox5"
                                class="label-brand text-capitalize"
                              >
                                Spa & Massage
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox6" type="checkbox" />
                              <label
                                for="checkbox6"
                                class="label-brand text-capitalize"
                              >
                                Pets Allow
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox7" type="checkbox" />
                              <label
                                for="checkbox7"
                                class="label-brand text-capitalize"
                              >
                                Air Conditioning
                              </label>
                            </div>

                            <div class="checkbox checkbox-primary">
                              <input id="checkbox8" type="checkbox" />
                              <label
                                for="checkbox8"
                                class="label-brand text-capitalize"
                              >
                                Gym
                              </label>
                            </div>

                            <div class="checkbox checkbox-primary">
                              <input id="checkbox9" type="checkbox" />
                              <label
                                for="checkbox9"
                                class="label-brand text-capitalize"
                              >
                                Alarm
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox10" type="checkbox" />
                              <label
                                for="checkbox10"
                                class="label-brand text-capitalize"
                              >
                                Window Covering
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox11" type="checkbox" />
                              <label
                                for="checkbox11"
                                class="label-brand text-capitalize"
                              >
                                Free WiFi
                              </label>
                            </div>
                            <div class="checkbox checkbox-primary">
                              <input id="checkbox12" type="checkbox" />
                              <label
                                for="checkbox12"
                                class="label-brand text-capitalize"
                              >
                                Car Parking
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="products__filter__footer">
                      <div class="form-group mb-0">
                        <button class="btn btn-primary text-capitalize btn-block">
                          <i class="fa fa-search ml-1"></i> search property{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END FORM FILTER -->
                    <!-- ARCHIVE CATEGORY --> */}
                <div class=" wrapper__list__category">
                  {/* <!-- CATEGORY --> */}
                  <div class="widget widget__archive">
                    <div class="widget__title">
                      <h5 class="text-dark mb-0 text-center">
                        Categories Property
                      </h5>
                    </div>
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
                  {/* <!-- END CATEGORY --> */}
                </div>
                {/* <!-- End ARCHIVE CATEGORY --> */}
               
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tabs__custom-v2 ">
                      {/* <!-- FILTER VERTICAL --> */}
                      <ul class="nav nav-pills myTab" role="tablist">
                        <li class="list-inline-item mr-auto">
                          <span class="title-text">Sort by</span>
                         
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-toggle="pill"
                            href="#pills-tab-one"
                            role="tab"
                            aria-controls="pills-tab-one"
                            aria-selected="true"
                          >
                            <span class="fa fa-th-list"></span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-toggle="pill"
                            href="#pills-tab-two"
                            role="tab"
                            aria-controls="pills-tab-two"
                            aria-selected="false"
                          >
                            <span class="fa fa-th-large"></span>
                          </a>
                        </li>
                      </ul>

                      <div class="tab-content" id="myTabContent">
                        <div
                          class="tab-pane fade"
                          id="pills-tab-one"
                          role="tabpanel"
                          aria-labelledby="pills-tab-one"
                        >
                        
                        
                         
                         
                     
                         
                        
                         
                        </div>
                        <div
                          class="tab-pane fade show active"
                          id="pills-tab-two"
                          role="tabpanel"
                          aria-labelledby="pills-tab-two"
                        >
                         
                      
                        
                          <div class="row">
                          {allads}                          
                          </div>

                          <div class="cleafix"></div>
                        </div>
                      </div>
                      {/* <!-- END FILTER VERTICAL --> */}
                    </div>
                  </div>
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
                  We Will Assist You In The Best And Comfortable Property
                  Services For You
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
  
  

   
   
      </>
    );
}
export default List

      
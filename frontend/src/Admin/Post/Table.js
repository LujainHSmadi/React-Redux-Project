import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";


// 
//   const dispatch = useDispatch();
//     const post = useSelector(state => getPosts(state, state.posts))
// console.log(post);
// useEffect(() => {
//   dispatch(getPosts());

// }, [dispatch]);
// const allads = post.map(post => { 





  const Table =()=>{


    const response =  fetch('http://localhost:8001/posts', {
      method: "GET",
      headers: {
        "Content-type": "application/json; charest=UTF-8",
      },
    });
    const result =  response.json();
    console.log('amal',result);
  //   const dispatch = useDispatch();
  //   const posts = useSelector(state => state.posts);
  
  //   useEffect(() => {
  //       dispatch(getPosts());
  
  //   }, [dispatch]);
  // console.log('llll',posts);
//     const allposts = posts.map(post => {
//         return (
//             <>
//             <tr>
//                           <td>
//                             <i class="fab fa-angular fa-lg text-danger me-3"></i>{" "}
//                             <strong>Angular Project</strong>
//                           </td>
//                           <td>Albert Cook</td>
//                           <td>
// 14-4-2000
//                           </td>
//                           <td>
//                             <span class="badge bg-label-primary me-1">
//                             <a 
//                                   href="/">
//                                   <i class="bx bx-edit-alt me-1 "></i> 
//                                 </a>
//                                 <a
                                 
//                                   href="/">
//                                   <i class="bx bx-trash me-2"></i> 
//                                 </a>
//                             </span>
//                           </td>
                         
//                         </tr>
//             </> )

// });












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
                  <span class="text-muted fw-light">User Information</span>
                </h4>

                {/* <!-- Basic Bootstrap Table --> */}
                <div class="card">
                  <h5 class="card-header">Users</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead>
                        <tr>
                          <th> title</th>
                          <th> body</th>
                          <th>date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        {/* {allposts} */}
                    
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!--/ Basic Bootstrap Table --> */}

                <hr class="my-5" />

               
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
  )
;
}
   

export default Table
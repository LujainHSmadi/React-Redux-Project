const Table =()=>{
  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}

          <aside
            id="layout-menu"
            class="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div class="app-brand demo">
              <a href="index.html" class="app-brand-link">
                <span class="app-brand-logo demo"></span>
                <span class="app-brand-text demo menu-text fw-bolder ms-2">
                  Sneat
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i class="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>

            <div class="menu-inner-shadow"></div>

            <ul class="menu-inner py-1">
              {/* <!-- Dashboard --> */}
              <li class="menu-item">
                <a href="index.html" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              {/* <!-- Layouts --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </a>

                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="layouts-without-menu.html" class="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-navbar.html" class="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-container.html" class="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-fluid.html" class="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-blank.html" class="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Pages</span>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-dock-top"></i>
                  <div data-i18n="Account Settings">Account Settings</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-account.html"
                      class="menu-link"
                    >
                      <div data-i18n="Account">Account</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-notifications.html"
                      class="menu-link"
                    >
                      <div data-i18n="Notifications">Notifications</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-connections.html"
                      class="menu-link"
                    >
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                  <div data-i18n="Authentications">Authentications</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="auth-login-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Login</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="auth-register-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Register</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="auth-forgot-password-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Forgot Password</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Forms & Tables --> */}
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Forms &amp; Tables</span>
              </li>
              {/* <!-- Forms --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Elements">Posts</div>
                </a>
              </li>
              <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Layouts">Posts</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="/table" class="menu-link">
                      <i class="menu-icon tf-icons bx bx-table"></i>
                      <div data-i18n="Tables">Tables</div>
                    </a>
                  </li>
                  <li class="menu-item active">
                    <a href="/create" class="menu-link">
                      <div data-i18n="Horizontal Form">create</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Forms & Tables -->
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Forms &amp; Tables</span>
              </li> */}
              {/* <!-- Forms --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Elements">User</div>
                </a>
              </li>
              <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Layouts">User</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="/table" class="menu-link">
                      <i class="menu-icon tf-icons bx bx-table"></i>
                      <div data-i18n="Tables">Tables</div>
                    </a>
                  </li>
                  <li class="menu-item active">
                    <a href="/create" class="menu-link">
                      <div data-i18n="Horizontal Form">create</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- Misc --> */}
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Misc</span>
              </li>
              <li class="menu-item">
                <a
                  href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons bx bx-support"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li>
            </ul>
          </aside>
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
                  <span class="text-muted fw-light">Tables /</span> Basic Tables
                </h4>

                {/* <!-- Basic Bootstrap Table --> */}
                <div class="card">
                  <h5 class="card-header">Table Basic</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        <tr>
                          <td>
                            <i class="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                            <strong>Angular Project</strong>
                          </td>
                          <td>Albert Cook</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img
                                  src="../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img
                                  src="../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img
                                  src="../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>
                            <span class="badge bg-label-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-1"></i> Edit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-trash me-1"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i class="fab fa-react fa-lg text-info me-3"></i>{" "}
                            <strong>React Project</strong>
                          </td>
                          <td>Barry Hunter</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img
                                  src="../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img
                                  src="../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img
                                  src="../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>
                            <span class="badge bg-label-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-2"></i> Edit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-trash me-2"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i class="fab fa-vuejs fa-lg text-success me-3"></i>{" "}
                            <strong>VueJs Project</strong>
                          </td>
                          <td>Trevor Baker</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img
                                  src="../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img
                                  src="../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img
                                  src="../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>
                            <span class="badge bg-label-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-2"></i> Edit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-trash me-2"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i class="fab fa-bootstrap fa-lg text-primary me-3"></i>{" "}
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img
                                  src="../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img
                                  src="../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img
                                  src="../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  class="rounded-circle"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>
                            <span class="badge bg-label-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-edit-alt me-2"></i> Edit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i class="bx bx-trash me-2"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!--/ Basic Bootstrap Table --> */}

                <hr class="my-5" />

               
              </div>
              {/* <!-- / Content -->

            <!-- Footer --> */}
              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    ©<script>document.write(new Date().getFullYear());</script>,
                    made with ❤️ by
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
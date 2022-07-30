import React from 'react'
import { Fragment } from 'react'

export default function sidebar() {
  return (
    <Fragment>
    
    
  
        

          <aside
            id="layout-menu"
            class="layout-menu menu-vertical menu bg-menu-theme"
          >


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

            </ul>
          </aside>
    
    
    </Fragment>
  )
}

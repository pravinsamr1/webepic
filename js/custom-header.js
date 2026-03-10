document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header class="">
        <div class="header-area body-black p-relative  ">
            <div class="menu-bar fixed-menu">
                <div class="container mainnn-haader">
                    <div class="row align-items-center gx-0">
                        <div class="col-5 col-xl-2 col-lg-3 col-md-4 p-0">
                            <div class="header-area-image style-2 ">
                                <a href="index.html"><img src="./images/my-img/logo-light.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="col-7 col-xl-10 col-lg-9 col-md-8">
                            <div
                                class="header-area-menu style-2 d-flex justify-content-end  d-xl-flex d-lg-flex  d-md-flex align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-end   p-relative z-index-11">
                                <nav>
                                    <ul
                                        class="main-menu  d-xl-flex d-lg-flex justify-content-center align-items-center">
                                        <li class="scroll-effect">
                                            <a href="./index.html">Home</a>

                                        </li>
                                        <li class="scroll-effect"><a class="plus-icon"  >About</a>
                                            <ul class="sub-menu">
                                                <li><a href="about.html">Company Overview</a></li>
                                                <li><a href="mission-vision.html">Vision and Mission</a></li>
                                                <li><a href="our-philosophy-and-focus.html">Our Philosophy and Focus</a></li>
                                            </ul>
                                        </li>
                                        <li class="scroll-effect"><a class="plus-icon" href="#">Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="web-design.html">Web Design</a></li>
                                                <li><a href="web-development.html">Web Development</a></li>
                                                <li><a href="cms-and-ecommerce.html">CMS & Ecommerce</a></li>
                                                <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                                <li><a href="mobile-applications.html">Mobile Applications</a></li>
                                                <li><a href="ai-agent.html">AI Agent</a></li>
                                                <li><a href="sap.html">SAP</a></li>
                                                <li><a href="devops.html">DevOps</a></li>
                                            </ul>
                                        </li>
                                        <li class="scroll-effect">
                                            <a href="our-clients.html">Our Clients</a>

                                        </li>
                                        <li class="scroll-effect"><a href="blog.html">Blogs</a></li>
                                        <li class="scroll-effect"><a href="contact-us.html">Reach Us</a></li>
                                        <li class="scroll-effect"><a href="carrers.html">Careers</a></li>
                                    </ul>
                                </nav>
                                <div class="header-area-touch-btn">
                                    <a href="free-seo-audit.html">Free SEO Audit</a>
                                </div>

                                <div id="toggle-button" class="button-like">
                                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Mobile Responsive Toggle Btn Start  -->
                        <div class="toggle-menus" id="toggle-active">
                            <div class="toggle-menu-header d-flex justify-content-between mb-40">
                                <div class="logo">
                                    <img src="./images/logo/header-logo.png" alt="">
                                </div>
                                <div class="toggle-close-icon">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <nav>
                                <ul class="dropdown">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li><a href="#0">About</a>
                                        <div class="dropdown-btn">
                                            <button class="dropdown-toggle-btn width-100" onclick="toggleList(2)"><i
                                                    class="fa-solid fa-plus"></i></button>
                                        </div>
                                        <ul id="dropdown-toggle-menu-2" class=" hidden-list">
                                            <li><a href="about.html">Company Overview</a></li>
                                                <li><a href="mission-vision.html">Vision and Mission</a></li>
                                                <li><a href="our-philosophy-and-focus.html">Our Philosophy and Focus</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#0">Service</a>
                                        <div class="dropdown-btn">
                                            <button class="dropdown-toggle-btn width-100" onclick="toggleList(3)"><i
                                                    class="fa-solid fa-plus"></i></button>
                                        </div>
                                        <ul id="dropdown-toggle-menu-3" class=" hidden-list">
                                            <li><a href="web-design.html">Web Design</a></li>
                                                <li><a href="web-development.html">Web Development</a></li>
                                                <li><a href="cms-and-ecommerce.html">CMS & Ecommerce</a></li>
                                                <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                                <li><a href="mobile-applications.html">Mobile Applications</a></li>
                                                <li><a href="ai-agent.html">AI Agent</a></li>
                                                <li><a href="sap.html">SAP</a></li>
                                                <li><a href="devops.html">DevOps</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./clients.html">Our Clients</a></li>
                                    <li>
                                        <a href="./blog.html">Blogs</a>
                                    </li>

                                    <li>
                                        <a href="free-seo-audit.html">Free SEO Audit</a>
                                    </li>

                                    <li>
                                        <a href="carrers.html">Carrers</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="toggle-menu-contact">
                                <h4 class="mb-25">Contact Info</h4>
                                <div class="address mb-20">
                                    <i class="mr-10 fa-solid fa-location-dot"></i>
                                    <span>Saravanampatti, Coimbatore, <br>
                                     Tamil Nadu 641035</span>
                                </div>
                                <div class="email mb-20">
                                    <i class="mr-10 fa-regular fa-envelope"></i>
                                    <a href="mailto:info@webepictech.com">  info@webepictech.com</a>
                                </div>
                                <div class="phone">
                                    <i class="mr-10 fa-solid fa-phone"></i>
                                    <span>99440 11175</span>
                                </div>
                            </div>
                            <div class="toggle-social-icon">
                                <ul class="d-flex justify-content-between">
                                    <a href="https://www.facebook.com/webepictechtechnologies/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/webepictechnologies/" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/web-epic-technologies-private-limited/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://x.com/webepictech" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                                    <a href="http://youtube.com/@webepictechnologies" target="_blank"><i class="fab fa-youtube"></i></a>
                                </ul>
                            </div>
                        </div>
                        <!-- Mobile Responsive Toggle Btn End  -->
                    </div>
                </div>
            </div>
        </div>
    </header>

    `;

  document.getElementById("header").innerHTML = header;
});

document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer>
        <div class="footer-area body-black footerr-backk" >
            <div class="container">
                <div class="row gx-0">
                    <div class="col-xl-3 col-lg-3 p-0">
                        <div class="footer-area-company-info p-relative">
                            <div class="footer-area-company-logo pt-75 pb-33">
                                <img src="./images/my-img/logo-light.png" alt="">
                            </div>
                            <hr class="line-1 p-absolute">
                            <hr class="mt-0 mb-0">
                            <div class="footer-area-heading-text pt-33 pb-31">
                                <h2>Let’s Work</h2>
                                <h4>Together</h4>
                            </div>
                            <div class="footer-area-company-fast-email pb-69">
                                <a href="tel:919944011175"> 99440 11175<img class="pl-10"
                                        src="./images/icon/footer-up-awrro.svg" alt=""> </a>
                            </div>
                            <hr class="mt-0 mb-16">
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9" >
                        <div class="footer-area-contract-info ">
                            <div
                                class="footer-area-social-info d-block d-xl-flex d-lg-flex d-md-flex  align-items-center pt-74 pb-34 justify-content-around">
                                <div class="sce-email">
                                    <a href="mailto:info@webepictech.com"><img class="mr-15"
                                            src="./images/icon/footer-email.svg" alt=""> info@webepictech.com </a>
                                </div>
                                <div class="social-content d-flex gap-40">
                                    <a href="https://www.facebook.com/webepictechtechnologies/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/webepictechnologies/" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/web-epic-technologies-private-limited/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://x.com/webepictech" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                                    <a href="http://youtube.com/@webepictechnologies" target="_blank"><i class="fab fa-youtube"></i></a>

                                </div>
                            </div>
                        </div>
                        <div class="footer-area-quick-menu d-flex pt-67 pb-40 ml-50 justify-content-between">
                            <div class="footer-area-quick-menu-one ">
                                <h4 class="mb-26">Quick Links</h4>
                                <ul>
                                    <li><a href="about.html">Company Overview</a></li>
                                    <li><a href="our-philosophy-and-focus.html">Our Focus</a></li>
                                    <li><a href="our-clients.html">Clients</a></li>
                                    <li><a href="blog.html">Blogs</a></li>
                                    <li><a href="free-seo-audit.html">Free SEO Audit</a></li>
                                </ul>
                            </div>
                            <div class="footer-area-quick-menu-two no-margini">
                                <h4 class="mb-26">Our Services</h4>
                                <ul>
                                    <li><a href="web-design.html">Web Design</a></li>
                                    <li><a href="web-development.html">Web Development</a></li>
                                    <li><a href="mobile-application.html">Mobile Development</a></li>
                                    <li><a href="ai-agent.html">AI Agent</a></li>
                                    <li><a href="seo.html">SEO</a></li>
                                </ul>
                            </div>
                            <div class="footer-area-services" style="width: 400px;">
                                <h4 class="mb-26">Contact Info</h4>

                                <div class="addresss">
                                <span style="margin-right:20px"><i class="fa-solid fa-location-dot"></i></span>
                                <p style="color:#fff" class="pb-10"> 
                                    
                                    Near KCT Tech park, Saravanampatti,
                                    Coimbatore, Tamil Nadu 641035</p>
                                </div>


                                <div class="addresss pb-20">
                                <span style="margin-right:20px"><i class="fa-solid fa-phone"></i></span>
                                <div class="d-flex gap-20">
                                        <p ><a href="tel:914224714181">422 4714181</a></p>
                                        <span class="line-2" style="width:2px;height:100%;background:#fff;"></span>
                                        <p><a href="tel:919944011165">99440 11165</a></p>
                                    </div>
                                </div>

                                <div class="addresss">
                                <span style="margin-right:20px"><i class="fa-solid fa-envelope"></i></span>
                                <p><a href="mailto:info@webepictech.com">info@webepictech.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copy-right-info d-flex justify-content-center align-items-center pb-15 ">
                <span  style="font-size:18px">©2021 <a href="https://webepictech.com/"  style="font-size:18px" target="_blank">webepictech</a> All Rights Reserved</span>
            </div>
        </div>
    </footer>

    `;

  document.getElementById("footer").innerHTML = footer;
});

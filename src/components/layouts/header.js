export default function Header(){
    return(
        <header className="app-header">
    <div className="main-header-container container-fluid">
        <div className="header-content-left">
                <div className="header-element">
                <div className="horizontal-logo">
                    <a href="index.html" className="header-logo">
                        <img src="../dashboard/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" /> <img src="../dashboard/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                        <img src="../dashboard/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" /> <img src="../dashboard/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                    </a>
                </div>
            </div>
            <div className="header-element">
                <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="javascript:void(0);"><span></span></a>
            </div>
        </div>
        <div className="header-content-right">
            <div className="header-element header-search">
                <a href="javascript:void(0);" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa-solid fa-magnifying-glass header-link-icon"></i> </a>
            </div>
            <div className="header-element country-selector">
                <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown"> <img src="../dashboard/images/flags/us_flag.jpg" alt="img" className="rounded-circle" /> </a>
                <ul className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/us_flag.jpg" alt="img" /> </span> English
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/spain_flag.jpg" alt="img" /> </span> Spanish
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/french_flag.jpg" alt="img" /> </span> French
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/germany_flag.jpg" alt="img" /> </span> German
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/italy_flag.jpg" alt="img" /> </span> Italian
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span className="avatar avatar-xs lh-1 me-2"> <img src="../dashboard/images/flags/russia_flag.jpg" alt="img" /> </span> Russian
                        </a>
                    </li>
                </ul>
            </div>
            <div className="header-element header-theme-mode">
                <a href="javascript:void(0);" className="header-link layout-setting">
								<span className="light-layout">
									<i className="fa-regular fa-lightbulb header-link-icon"></i>
								</span>
                    <span className="dark-layout">
									<i className="fa-solid fa-lightbulb header-link-icon"></i>
								</span>
                </a>
            </div>
            <div className="header-element cart-dropdown">
                <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                    <i className="fa-solid fa-cart-shopping header-link-icon"></i> <span className="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">5</span>
                </a>
                <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0 fs-17 fw-semibold">Cart Items</p>
                            <span className="badge bg-success-transparent" id="cart-data">5 Items</span>
                        </div>
                    </div>
                    <div><hr className="dropdown-divider" /></div>
                    <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start cart-dropdown-item">
                                <img src="../dashboard/images/ecommerce/jpg/1.jpg" alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                        <div className="mb-0 fs-13 text-dark fw-semibold"><a href="cart.html">SomeThing Phone</a></div>
                                        <div>
                                            <span className="text-black mb-1">$1,299.00</span> <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                        <ul className="header-product-item d-flex">
                                            <li>Metallic Blue</li>
                                            <li>6gb Ram</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start cart-dropdown-item">
                                <img src="../dashboard/images/ecommerce/jpg/3.jpg" alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                        <div className="mb-0 fs-13 text-dark fw-semibold"><a href="cart.html">Stop Watch</a></div>
                                        <div>
                                            <span className="text-black mb-1">$179.29</span> <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                        <ul className="header-product-item">
                                            <li>Analog</li>
                                            <li><span className="badge bg-pink-transparent fs-10">Free shipping</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start cart-dropdown-item">
                                <img src="../dashboard/images/ecommerce/jpg/5.jpg" alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                        <div className="mb-0 fs-13 text-dark fw-semibold"><a href="cart.html">Photo Frame</a></div>
                                        <div>
                                            <span className="text-black mb-1">$29.00</span> <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                        <ul className="header-product-item d-flex">
                                            <li>Decorative</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start cart-dropdown-item">
                                <img src="../dashboard/images/ecommerce/jpg/4.jpg" alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                        <div className="mb-0 fs-13 text-dark fw-semibold"><a href="cart.html">Kikon Camera</a></div>
                                        <div>
                                            <span className="text-black mb-1">$4,999.00</span> <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                        <ul className="header-product-item d-flex">
                                            <li>Black</li>
                                            <li>50MM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start cart-dropdown-item">
                                <img src="../dashboard/images/ecommerce/jpg/6.jpg" alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                        <div className="mb-0 fs-13 text-dark fw-semibold"><a href="cart.html">Canvas Shoes</a></div>
                                        <div>
                                            <span className="text-black mb-1">$129.00</span> <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <ul className="header-product-item d-flex">
                                            <li>Gray</li>
                                            <li>Sports</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="p-3 empty-header-item border-top">
                        <div className="d-grid"><a href="checkout.html" className="btn btn-primary">Proceed to checkout</a></div>
                    </div>
                    <div className="p-5 empty-item d-none">
                        <div className="text-center">
                            <span className="avatar avatar-xl avatar-rounded bg-warning-transparent"> <i className="ri-shopping-cart-2-line fs-2"></i> </span>
                            <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                            <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy</span>
                            <a href="products.html" className="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-element notifications-dropdown">
                <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                    <i className="fa-solid fa-bell header-link-icon"></i> <span className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">5</span>
                </a>
                <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                            <span className="badge bg-secondary-transparent" id="notifiation-data">5 Unread</span>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <ul className="list-unstyled mb-0" id="header-notification-scroll">
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start">
                                <div className="pe-2">
                                    <span className="avatar avatar-md bg-primary-transparent avatar-rounded"><i className="ti ti-gift fs-18"></i></span>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-semibold"><a href="notifications.html">Your Order Has Been Shipped</a></p>
                                        <span className="text-muted fw-normal fs-12 header-notification-text">Order No: 123456 Has Shipped To Your Delivery Address</span>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start">
                                <div className="pe-2">
                                    <span className="avatar avatar-md bg-secondary-transparent avatar-rounded"><i className="ti ti-discount-2 fs-18"></i></span>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-semibold"><a href="notifications.html">Discount Available</a></p>
                                        <span className="text-muted fw-normal fs-12 header-notification-text">Discount Available On Selected Products</span>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start">
                                <div className="pe-2">
                                    <span className="avatar avatar-md bg-pink-transparent avatar-rounded"><i className="ti ti-user-check fs-18"></i></span>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-semibold"><a href="notifications.html">Account Has Been Verified</a></p>
                                        <span className="text-muted fw-normal fs-12 header-notification-text">Your Account Has Been Verified Sucessfully</span>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start">
                                <div className="pe-2">
                                    <span className="avatar avatar-md bg-warning-transparent avatar-rounded"><i className="ti ti-circle-check fs-18"></i></span>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-semibold">
                                            <a href="notifications.html">Order Placed <span className="text-warning">ID: #1116773</span></a>
                                        </p>
                                        <span className="text-muted fw-normal fs-12 header-notification-text">Order Placed Successfully</span>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="d-flex align-items-start">
                                <div className="pe-2">
                                    <span className="avatar avatar-md bg-success-transparent avatar-rounded"><i className="ti ti-clock fs-18"></i></span>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-semibold">
                                            <a href="notifications.html">Order Delayed <span className="text-success">ID: 7731116</span></a>
                                        </p>
                                        <span className="text-muted fw-normal fs-12 header-notification-text">Order Delayed Unfortunately</span>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="p-3 empty-header-item1 border-top">
                        <div className="d-grid"><a href="notifications.html" className="btn btn-primary">View All</a></div>
                    </div>
                    <div className="p-5 empty-item1 d-none">
                        <div className="text-center">
                            <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent"> <i className="ri-notification-off-line fs-2"></i> </span>
                            <h6 className="fw-semibold mt-3">No New Notifications</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-element header-shortcuts-dropdown">
                <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false">
                    <i className="fa-solid fa-grip header-link-icon"></i>
                </a>
                <div className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-between"><p className="mb-0 fs-17 fw-semibold">Related Apps</p></div>
                    </div>
                    <div className="dropdown-divider mb-0"></div>
                    <div className="main-header-shortcuts p-2" id="header-shortcut-scroll">
                        <div className="row g-2">
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/figma.png" alt="" /> </span> <span className="d-block fs-12">Figma</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/microsoft-powerpoint.png" alt="" /> </span> <span className="d-block fs-12">Power Point</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/microsoft-word.png" alt="" /> </span> <span className="d-block fs-12">MS Word</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/calender.png" alt="" /> </span> <span className="d-block fs-12">Calendar</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/sketch.png" alt="" /> </span> <span className="d-block fs-12">Sketch</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/google-docs.png" alt="" /> </span> <span className="d-block fs-12">Docs</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/google.png" alt="" /> </span> <span className="d-block fs-12">Google</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/translate.png" alt="" /> </span> <span className="d-block fs-12">Translate</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="javascript:void(0);">
                                    <div className="text-center p-3 related-app">
                                        <span className="avatar avatar-sm avatar-rounded"> <img src="../dashboard/images/apps/google-sheets.png" alt="" /> </span> <span className="d-block fs-12">Sheets</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-top">
                        <div className="d-grid"><a href="javascript:void(0);" className="btn btn-primary">View All</a></div>
                    </div>
                </div>
            </div>
            <div className="header-element header-fullscreen">
                <a onclick="openFullscreen();" href="#" className="header-link"> <i className="fa-solid fa-expand header-link-icon"></i></a>
            </div>
            <div className="header-element">
                <a href="#" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <div className="d-flex align-items-center">
                        <div className="me-sm-2 me-0"><img src="../dashboard/images/faces/9.jpg" alt="img" width="32" height="32" className="rounded-circle" /></div>
                        <div className="d-sm-block d-none">
                            <p className="fw-semibold mb-0 lh-1">Json Taylor</p>
                            <span className="op-7 fw-normal d-block fs-11">Web Designer</span>
                        </div>
                    </div>
                </a>
                <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                    <li>
                        <a className="dropdown-item d-flex" href="profile.html"><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex" href="mail.html"><i className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox <span className="badge bg-success-transparent ms-auto">25</span></a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex border-block-end" href="to-do-list.html"><i className="ti ti-clipboard-check fs-18 me-2 op-7"></i>Task Manager</a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex" href="mail-settings.html"><i className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex border-block-end" href="javascript:void(0);"><i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex" href="chat.html"><i className="ti ti-headset fs-18 me-2 op-7"></i>Support</a>
                    </li>
                    <li>
                        <a className="dropdown-item d-flex" href="sign-in-cover.html"><i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</a>
                    </li>
                </ul>
            </div>
            <div className="header-element">
                <a href="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"> <i className="fa-solid fa-gear header-link-icon"></i> </a>
            </div>
        </div>
    </div>
</header>

    )
}
import { useState,useEffect } from "react";
export default function Sidebar(){
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const [show5,setShow5] = useState(false);
    const [show6,setShow6] = useState(false);
    const [show7,setShow7] = useState(false);
    const [show8,setShow8] = useState(false);
    return(
        <aside className="app-sidebar sticky" id="sidebar">
            <div className="main-sidebar-header">
        <a href="" className="header-logo">
            <img src="../images/logo.png" style={{display:"flex"}} alt="logo" className="desktop-dark" />
        </a>
    </div>
    <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div className="slide-left" id="slide-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
            </div>
            <ul className="main-menu">
                <li className="slide__category"><span className="category-name">Main</span></li>
                <li className="slide has-sub" onClick={()=>{setShow(!show)}} >
                    <a href="javascript:void(0);" className="side-menu__item">
                        <i className="fa-solid fa-house side-menu__icon"></i> <span className="side-menu__label">Dashboards<span className="badge bg-warning-transparent ms-2">2</span></span> <i className="fe fe-chevron-right side-menu__angle"></i>
                    </a>
                    <ul className="slide-menu child1" style={{display:show?"block":"none"}}>
                        <li className="slide side-menu__label1"><a href="javascript:void(0)">Dashboards</a></li>
                        <li className="slide"><a href="" className="side-menu__item">Overview</a></li>
                        <li className="slide"><a href="#" className="side-menu__item">Action for overview</a></li>
                    </ul>
                </li>

                <li className="slide__category"><span className="category-name">Booking</span></li>
                <li className="slide has-sub" onClick={()=>{setShow1(!show1)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-car-on side-menu__icon"></i> <span className="side-menu__label">Booking</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1" style={{display:show1?"block":"none"}} >
                        <li className="slide"><a href="" className="side-menu__item">Booking</a></li>
                        <li className="slide"><a href="" className="side-menu__item">Booking Details</a></li>
                    </ul>
                </li>
                <li className="slide__category"><span className="category-name">Cars</span></li>
                <li className="slide has-sub" onClick={()=>{setShow2(!show2)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-car side-menu__icon"></i> <span className="side-menu__label">Cars</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show2?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Cars</a></li>
                        <li className="slide"><a href="" className="side-menu__item">Add Cars</a></li>
                    </ul>
                </li>

                <li className="slide__category"><span className="category-name">Car Type</span></li>
                <li className="slide has-sub" onClick={()=>{setShow3(!show3)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-car side-menu__icon"></i> <span className="side-menu__label">Car Type</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show3?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Car Type</a></li>
                    </ul>
                </li>

                <li className="slide__category"><span className="category-name">Brands</span></li>
                <li className="slide has-sub" onClick={()=>{setShow4(!show4)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-building side-menu__icon"></i> <span className="side-menu__label">Brands</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show4?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Brands</a></li>
                        <li className="slide"><a href="" className="side-menu__item">Add Brands</a></li>
                    </ul>
                </li>
                <li className="slide__category"><span className="category-name">Contact Query</span></li>
                <li className="slide has-sub" onClick={()=>{setShow5(!show5)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-users side-menu__icon"></i> <span className="side-menu__label">Contact Query</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show5?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Contact Query</a></li>
                    </ul>
                </li>

                <li className="slide__category"><span className="category-name">Customers</span></li>
                <li className="slide has-sub" onClick={()=>{setShow6(!show6)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-user side-menu__icon"></i> <span className="side-menu__label">Customers</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show6?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Customers</a></li>
                    </ul>
                </li>
                <li className="slide__category"><span className="category-name">Services</span></li>
                <li className="slide has-sub" onClick={()=>{setShow7(!show7)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-truck-fast side-menu__icon"></i> <span className="side-menu__label">Services</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show7?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Services</a></li>
                    </ul>
                </li>

                <li className="slide__category"><span className="category-name">Incidents</span></li>
                <li className="slide has-sub" onClick={()=>{setShow8(!show8)}}>
                    <a href="javascript:void(0);" className="side-menu__item"> <i className="fa-solid fa-indent side-menu__icon"></i> <span className="side-menu__label">Incidents</span> <i className="fe fe-chevron-right side-menu__angle"></i> </a>
                    <ul className="slide-menu child1 mega-menu" style={{display:show8?"block":"none"}}>
                        <li className="slide"><a href="" className="side-menu__item">Incidents</a></li>
                    </ul>
                </li>

            </ul>
            <div className="slide-right" id="slide-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            </div>
        </nav>
    </div>
</aside>

    )
}
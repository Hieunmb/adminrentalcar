export default function ContentHeader(){
    return(
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
    <h1 className="page-title fw-semibold fs-18 mb-0">Admin</h1>
    <div className="ms-md-1 ms-0">
        <nav>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                <li className="breadcrumb-item active" aria-current="page">Admin</li>
            </ol>
        </nav>
    </div>
</div>

    )
}
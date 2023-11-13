export default function AdminBooking(){
    return(
    <div className="row">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between flex-wrap">
                    <div className="card-title">Booking</div>
                    <div className="d-flex">
                        <div className="me-3"><input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/></div>
                        <div className="dropdown">
                            <a href="javascript:void(0);" className="btn btn-primary btn-sm btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li><a className="dropdown-item" href="">Pending</a></li>
                                <li><a className="dropdown-item" href="">Confirmed</a></li>
                                <li><a className="dropdown-item" href="">Delivery</a></li>
                                <li><a className="dropdown-item" href="">Renting</a></li>
                                <li><a className="dropdown-item" href="">Processing</a></li>
                                <li><a className="dropdown-item" href="">Completed</a></li>
                                <li><a className="dropdown-item" href="">Cancel</a></li>
                                <li><a className="dropdown-item" href="">All</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover text-nowrap table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Car</th>
                                <th scope="col">Rental Date & Time</th>
                                <th>Return Date & Time</th>
                                <th scope="col">Desposit</th>
                                <th scope="col">Total Amount</th>
                                <th scope="col">Is Paid</th>
                                <th scope="col">Status</th>
                                <th scope="col">View</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-list">
                                            <a>Nguyen Bui Minh Hieu</a>
                                            <a aria-label="anchor" href="" className="btn btn-sm btn-icon btn-info-light">
                                                <i className="fa-solid fa-circle-info"></i>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn-list">
                                            <a>KIA</a>
                                            <a aria-label="anchor" href="" className="btn btn-sm btn-icon btn-info-light">
                                                <i className="fa-solid fa-circle-info"></i>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        10/10/2023
                                    </td>
                                    <td>
                                       14/10/2023
                                    </td>
                                    <td>
                                        $200
                                    </td>
                                    <td>$400</td>
                                    <td>
                                            <span className="badge bg-success">Pain</span>
                                            <span className="badge bg-danger">UnPain</span>
                                    </td>
                                    <td>
                                             <span
                                                className="badge bg-dark text-white fw-bold">Pending</span>
                                             <span
                                                className="badge bg-info text-black fw-bold">Confirmed</span>
                                             <span
                                                className="badge bg-info text-black fw-bold">Delivery</span>
                                             <span
                                                className="badge bg-warning text-black fw-bold">In Progress</span>
                                             <span
                                                className="badge bg-warning text-black fw-bold">Processing</span>
                                             <span
                                                className="badge bg-success text-black fw-bold">Completed</span>
                                             <span
                                                className="badge bg-danger text-black fw-bold">Cancel</span>
                                    </td>
                                    <td>
                                        <a href="" className="badge bg-info">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center">
                        <div>Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i></div>
                        <div className="ms-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
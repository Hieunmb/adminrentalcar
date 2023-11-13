export default function AdminBookingDetail(){
    return(
    <div className="row">
        <div className="col-xl-9">
            <div className="card custom-card">
                <div className="card-header d-md-flex d-block">
                    <div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
                        <div className="avatar avatar-sm"><img src="../dashboard/images/brand-logos/toggle-logo.png"
                                                           alt=""/></div>
                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                            <div className="h6 fw-semibold mb-0">CAR RENTAL CONTRACT : <span
                                    className="text-primary">#1</span>
                            </div>
                        </div>
                    </div>
                    <div className="ms-auto mt-md-0 mt-2">
                        <button className="btn btn-sm btn-secondary me-1" onclick="javascript:window.print();">Print<i
                                className="ri-printer-line ms-1 align-middle d-inline-block"></i></button>
                        <button className="btn btn-sm btn-primary">Save As PDF<i
                                className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row gy-3">
                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-12">
                                    <h4 style={{textAlign: "center", marginBottom: "20px"}}>
                                        CAR RENTAL CONTRACT
                                    </h4>
                                    <div style={{float: "right", marginBottom: "20px"}}>
                                        <span>No: #1</span>
                                        <span>Contact Date: 14/10/2023</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p>- According to the Civil Code became effective as from 01st January 2006;</p>
                                    <p>- According to ability and requirement of both parties.</p>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <p className="text-muted mb-2">LEADER (Party A) : </p>
                                    <p className="fw-bold mb-1"> SPRUKO TECHNOLOGIES </p>
                                    <p className="mb-1 text-muted"> Mig-1-11,Manroe street </p>
                                    <p className="mb-1 text-muted"> Georgetown,Washington D.C,USA,200071 </p>
                                    <p className="mb-1 text-muted"> sprukotrust.ynex@gmail.com </p>
                                    <p className="mb-1 text-muted"> (555) 555-1234 </p>
                                    <p className="text-muted">For more information check for <a
                                            href="javascript:void(0);" className="text-primary fw-semibold"><u>GSTIN</u></a>
                                        Details.</p></div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                                    <p className="text-muted mb-2">TENDER (Party B) : </p>
                                    <p className="fw-bold mb-1">Full Name: Nguyen Bui Minh Hieu </p>
                                        <p className="text-muted mb-1">Address: 8 Ton That Thuyet </p>
                                    <p className="text-muted mb-1">Email: zhuongdae@gmail.com </p>
                                    <p className="text-muted">Phone: 0964958450 </p></div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <p className="fw-semibold text-muted mb-1">Invoice ID :</p>
                            <p className="fs-15 mb-1">1</p></div>
                        <div className="col-xl-3">
                            <p className="fw-semibold text-muted mb-1">Rental Date :</p>
                            <p className="fs-15 mb-1">14/10/2023</p>
                        </div>
                        <div className="col-xl-3">
                            <p className="fw-semibold text-muted mb-1">Return Date :</p>
                            <p className="fs-15 mb-1">14/10/2023</p></div>
                        <div className="col-xl-3">
                            <p className="fw-semibold text-muted mb-1">Due Amount :</p>
                            <p className="fs-16 mb-1 fw-semibold">$200</p></div>
                        <div className="col-xl-12">
                            <div className="row">
                                <h6 className="col-12" style={{textAlign: "center"}}>
                                    SERVICE INFORMATION
                                </h6>
                                <div className="col-xl-3"></div>
                                <div className="col-xl-6 table-responsive">
                                        <table className="table nowrap text-nowrap border mt-4">
                                            <thead>
                                            <tr>
                                                <th>SERVICE</th>
                                                <th>PRICE</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Fuel</td>
                                                    <td>50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p style={{textAlign:"center"}}>Do not use the service</p>

                                </div>
                                <div className="col-xl-3"></div>
                            </div>

                        </div>
                        <div className="col-xl-12">
                            <div className="row">
                                <h6 className="col-12" style={{textAlign:"center"}}>
                                    ADDITIONAL COSTS
                                </h6>
                                <div className="col-xl-3"></div>
                                <div className="col-xl-6 table-responsive">
                                        <table className="table nowrap text-nowrap border mt-4">
                                            <thead>
                                            <tr>
                                                <th>TITLE</th>
                                                <th>EXPENSE</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Crash</td>
                                                    <td>50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p style={{textAlign:"center"}}>No extra costs</p>
                                </div>
                                <div className="col-xl-3"></div>
                            </div>

                        </div>
                        <div className="col-xl-12">
                            <h6 style={{textAlign:"center"}}>
                                CAR INFORMATION
                            </h6>
                            <div className="table-responsive">
                                <table className="table nowrap text-nowrap border mt-4">
                                    <thead>
                                    <tr>
                                        <th>CAR</th>
                                        <th>CAR PRICE</th>
                                        <th>PICKUP LOCATION</th>
                                        <th>TOTAL DAYS</th>
                                        <th>TOTAL CAR BOOKING</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>KIA</td>
                                        <td>50</td>
                                        <td>Hanoi</td>
                                        <td>50</td>
                                        <td> $200</td>
                                    <tr>
                                        <td colspan="3"></td>
                                        <td colspan="3">
                                            <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                <tbody>
                                                <tr>
                                                    <th scope="row"><p className="mb-0">Deposit Status :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                <span className="badge bg-success">Pain</span>
                                                                <span className="badge bg-danger">UnPain</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><p className="mb-0">Payment Status :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                <span className="badge bg-success">Pain</span>
                                                                <span className="badge bg-danger">UnPain</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><p className="mb-0">Sub Total :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-15">$200</p></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><p className="mb-0">Service Total :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-15">$300</p></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><p className="mb-0">Additional costs Total :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-15">$499</p></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><p className="mb-0 fs-14">Total :</p></th>
                                                    <td><p className="mb-0 fw-semibold fs-16 text-success">$6523</p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xl-12">
                                <p className="ml10"><strong>Message:</strong> Error</p>
                            <p>
                                <b>After discussion, both Parties have agreed to sign this contract on the terms and conditions as follows:</b>
                            </p>
                            <p><b>Article 1:</b> Rental period:</p>
                            <p>1.1 Rental period is rental=expected days from rental=rental_date to rental=return_date</p>
                            <p>1.2 Mileage Limit: rental=car=km_limit Km/Day.</p>
                            <p>1.3 Place to pick up passengers: rental=pickup_location.</p>
                            <p><b>Article 2:</b> Rental vehicles and charges</p>
                            <p>2.1 Rental vehicles: rental=car=model : $rental=car_price/day</p>
                            <p>2.2 Other charges:</p>
                            <p>- Over Limited Mileage rate (excess of .......kms/....days)    : USD ............/km.</p>
                            <p>2.3 All charges are inclusive of Value Added Tax.</p>
                            <p>2.4(if any) Car rental charges include gasoline and driver's salary, driver’s daily lunch.</p>
                            <p>2.5 Timely delivery of the vehicle will be paid by Party A.</p>
                            <p>2.6 Check the car, Receive the car , All costs and expenses occurred as the consequence of traffic accident will be at Party B's account.</p>
                            <p><b>Article 3:</b> Payment </p>
                            <p>3.1 All rates are quoted in USD.</p>
                            <p><b>Article 4:</b> Other terms and conditions</p>
                            <p>4.1 Party A is responsible for all legal documents and formalities for transportation of the above-mentioned vehicle.</p>
                            <p>4.2 Party B is not allowed to bring any illegal, flammable, or explosive materials into the vehicle.</p>
                            <p>4.3 Party B pay all fuel costs when using the vehicle.</p>
                            <p>4.4 In case of accident, any liability and settlement of claim lodged by third Parties will be the sole responsibility of Party B.</p>
                            <p>4.5 Insuring car and passengers (US$10,000 for each person) are the responsibility of  Party B.</p>
                            <p>4.6 The terms of this contract are confidential. Both Parties agree not to disclose them to any person unless applicable law requires.</p>
                        </div>
                        <div className="col-xl-12">
                            <div>
                                <label for="invoice-note" className="form-label">Note:</label>
                                <textarea className="form-control form-control-light" id="invoice-note" rows="3">Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <b style={{float:"left"}}>
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
                    </b>
                            <a href="" className="btn btn-success float-right">
                                <i className="far fa-credit-card"></i>
                                Confirm
                            </a>
                            <a href="" className="btn btn-danger float-right">
                                <i className="far fa-credit-card"></i>
                                Cancel
                            </a>
                            <a href="" className="btn btn-success float-right">
                                <i className="far fa-credit-card"></i>
                                Car Handover
                            </a>
                            <a href="" className="btn btn-danger float-right">
                                <i className="far fa-credit-card"></i>
                                Cancel
                            </a>
                            <a href="" className="btn btn-success float-right">
                                <i className="far fa-credit-card"></i>
                                In-Progress
                            </a>
                            <a href="" className="btn btn-danger float-right">
                                <i className="far fa-credit-card"></i>
                                Cancel
                            </a>
                            <a href="" className="btn btn-success float-right"><i className="far fa-credit-card"></i> Submit
                                Completed
                            </a>
                            <a href="" className="btn btn-danger float-right"><i className="far fa-credit-card"></i> Submit
                                Incident
                            </a>
                            <a href="" className="btn btn-success float-right"><i className="far fa-credit-card"></i> Submit
                                Nhận xe
                            </a>
                    <button className="btn btn-success">Download <i className="ri-download-2-line ms-1 align-middle"></i></button>
                </div>
            </div>
        </div>
        <div className="col-xl-3">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Note</div>
                </div>
                <div className="card-body">
                    <div className="row gy-3">
                        <div className="col-xl-12">
                            <p><span className="fw-semibold text-muted fs-12">Name On Card :</span> rental=customer=name </p>
                            <p><span className="fw-semibold text-muted fs-12">Total Amount :</span> <span
                                    className="text-success fw-semibold fs-14">$rental=total_amount</span></p>
                            <p><span className="fw-semibold text-muted fs-12">Invoice Status : @switch($rental=status)
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
                                    </span></p>
                            <p>
                                <span className="fw-semibold text-muted fs-12">Deposit Status :
                                        <span className="badge bg-success">Pain</span>
                                        <span className="badge bg-danger">UnPain</span>
                                </span>
                            </p>
                            <p>
                                <span className="fw-semibold text-muted fs-12">Pay rent Status :
                                        <span className="badge bg-success">Pain</span>
                                        <span className="badge bg-danger">UnPain</span>
                                </span>
                            </p>
                            <p>
                                <span className="fw-semibold text-muted fs-12">Return Car :
                                        <span className="badge bg-success">Pain</span>
                                        <span className="badge bg-danger">UnPain</span>
                                </span>
                            </p>
                            <p>
                                <span className="fw-semibold text-muted fs-12">Return the deposit :
                                        <span className="badge bg-success">Pain</span>
                                        <span className="badge bg-danger">UnPain</span>
                                </span>
                            </p>
                            <p>
                                <span className="fw-semibold text-muted fs-12">Review :
                                        <span className="badge bg-success">Reviewed</span>
                                        <span className="badge bg-danger">Not yet reviewed</span>
                                </span>
                            </p>
                            <div className="alert alert-success" role="alert"> Please Make sure to pay the invoice bill
                                within 30 days.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="card custom-card">
                    <div className="card-header">
                        <div className="card-title">The customer has not received the car yet!</div>
                    </div>
                </div>
                <div className="card custom-card">
                    <div className="card-header">
                        <div className="card-title">The customer has received the car</div>
                    </div>
                    <div className="card-body">
                        <div className="row gy-3">
                            <div className="col-xl-12">
                                    <p className="card-title mb-3">Note: item=note</p>
                                    <img src="item->thumbnail_1" className="img-fluid rounded" alt="..."/>
                                    <img src="item->thumbnail_2" className="img-fluid rounded" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </div>
    )
}
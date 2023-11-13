
export default function AdminAddCar(){
    const someid = document.querySelector('#someid');
    return(
    <div className="row">
        <div className="col-xl-12">
            <div className="card custom-card">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className="card-header justify-content-between">
                            <div className="card-title"><a href="#">Add Car Details</a></div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="card-header justify-content-between">
                            <div className="card-title"><a href="#">Add Gallery</a></div>
                        </div>
                    </li>
                </ul>
                <form action="" method="post" className="row row-cols-lg-auto g-3 align-items-center" enctype="multipart/form-data">
                    <div className="card-body">
                        <div className="row gy-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Enter License Plate</label> <input
                                    type="text" name="license_plate" className="form-control" id="input-placeholder"
                                    placeholder="Enter License Plate"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Enter Model</label> <input name="model" type="text"
                                                                                                             className="form-control"
                                                                                                             id="input-placeholder"
                                                                                                             placeholder="Enter Model"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Choose Brand</label>
                                <select name="brand_id" className="form-select default-pill" aria-label="Default select example">
                                    <option value="1">Toyota</option>
                                    <option value="2">KIA</option>
                                </select>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Choose Car Type</label>
                                <select name="carType_id" className="form-select default-pill" aria-label="Default select example">
                                        <option value="1">KIA</option>
                                        <option value="2">Jeep</option>
                                </select>
                                <p className="text-danger"><i>Error</i></p>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-file" className="form-label">Upload Photos</label>
                                <input className="form-control" name="thumbnail" type="file" id="input-file"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Enter Fuel Type</label> <input
                                    type="text" name="fuelType" className="form-control" id="input-placeholder"
                                    placeholder="Enter Fuel Type"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Enter Transmission</label> <input
                                    type="text" name="transmission" className="form-control" id="input-placeholder"
                                    placeholder="Enter Transmission"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" className="form-label">Enter Km Limit</label> <input name="km_limit" type="number"
                                                                                                       className="form-control"
                                                                                                       id="input-number"
                                                                                                       placeholder="Enter Km Limit"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-month" className="form-label">Enter year of manufacture</label>
                                <input name="modelYear" type="number" className="form-control" id="input-number" placeholder="Enter Model Year"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>


                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" className="form-label">Enter Seat</label> <input name="seats" type="number"
                                                                                                       className="form-control"
                                                                                                       id="input-number"
                                                                                                       placeholder="Enter Seat"/>
                                <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Status</label>
                                <select name="status" className="form-select default-pill" aria-label="Default select example">
                                    <option value="0">Rentable</option>
                                    <option value="1">Unrentable</option>
                                    <option value="2">Repairing</option>
                                </select>
                                <p className="text-danger"><i>Error</i></p>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input className="form-check-input ms-2" type="checkbox" name="reverse_sensor" value="1"/>

                            <span className="mb-3 px-0 text-muted">Reverse sensor</span>

                                <br/>
                                <input className="form-check-input ms-2" type="checkbox" name="airConditioner" value="1"/>

                                <span className="mb-3 px-0 text-muted">Air Conditioner</span>
                                <br/>
                                <input className="form-check-input ms-2" type="checkbox" name="driverAirbag" value="1"/>

                                <span for="input-number" className="form-label">Driver Air Bag</span>
                                <br/>
                                <input className="form-check-input ms-2" type="checkbox" name="cDPlayer" value="1"/>

                                <span for="input-number" className="form-label">CD Player</span>

                                <br/>
                                <input className="form-check-input ms-2" type="checkbox" name="brakeAssist" value="1"/>

                                <span for="input-number" className="form-label">Brake Assist</span>

                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="text-area" className="form-label">Enter Car Description</label>
                                <textarea name="description" className="form-control" id="text-area" rows="1"></textarea>
                                <p className="text-danger"><i>Error</i></p>
                            </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" className="form-label">Price Rent By Day</label> <input name="rentalrate_price_day" type="number"
                                                                                                       className="form-control"
                                                                                                       id="input-number"
                                                                                                       placeholder="Enter Rate"/>
                                    <p className="text-danger"><i>Error</i></p>
                            </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" className="form-label">Price Rent By Hour</label> <input name="rentalrate_price_hours" type="number"
                                                                                                       className="form-control"
                                                                                                       id="input-number"
                                                                                                       placeholder="Enter Rate"/>
                                    <p className="text-danger"><i>Error</i></p>
                            </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" className="form-label">Price Desposit</label> <input name="desposit" type="number"
                                                                                                       className="form-control"
                                                                                                       id="input-number"
                                                                                                       placeholder="Enter Desposit"/>
                                    <p className="text-danger"><i>Error</i></p>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Add Car</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}
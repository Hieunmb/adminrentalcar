export default function AdminAddCarType(){
    return(
    <div className="row">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">Add Car Type</div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show<i
                                className="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                    </div>
                </div>
                <form  method="post" action="" enctype="multipart/form-data"  className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="card-body">
                        <div className="row gy-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Enter Name Car Type</label>
                                <input
                                    name="name" type="text" className="form-control" id="input-placeholder"
                                    placeholder="Enter Name Car Type"/>
                                <p className="text-danger"><i></i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-file" className="form-label">Upload Icon</label>
                                <input name="icon" className="form-control" type="file" id="input-file" />
                                <p className="text-danger"><i></i></p>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" className="form-label">Description</label> <input
                                    name="description" type="text" className="form-control" id="input-placeholder"
                                    placeholder="Enter Description"/>
                                <p className="text-danger"><i></i></p>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Add Car Type</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
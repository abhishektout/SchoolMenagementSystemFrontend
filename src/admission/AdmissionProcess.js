import './Style.css'
function AdmissionProcess(){
    const handleSubmit=()=>{
        alert("function heat")
    }
    return <>
      
        <form onSubmit={handleSubmit}>

            <div className="outDiv">
                <h2 className="heading">Mount Carmal School Addmission Form</h2>
            </div>
            <div className="mt-2 p-5">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>FullName</label>
                            </div>
                            <div className="col-6">
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Father Name</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Mother Name</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Gender</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Class</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Adress</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Date of birth</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Aadhar no.</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Cast certificate no.</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Birth certificate no.</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Fee</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Income proof</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5" style={{ marginTop: "-8vw" }}>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Previous class</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <label>Previous class roll no.</label>
                            </div>
                            <div className="col-6">
                            <input type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><button style={{width:"90%",marginLeft:"5vw",marginRight:"5vw"}} type='submit' className='btn btn-success'>Submit</button></div>
        </form>


    </>

}

export default AdmissionProcess;
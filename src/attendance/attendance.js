import { useState } from "react";
import "./attendance.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Attendance(){
    const [stdId,setStdId] = useState("");
    const [month,setMonth] = useState("");
    const [present,setPresent] = useState("");
    const [absent,setAbsent] = useState("");
   
    const submitForm = async (event) =>{
        event.preventDefault();
        try{
            let response = await axios.post("http://localhost:3000/student/studentAttendance",{stdId,month,present,absent})
            console.log(response.data.status);
            if(response.data.status){
                toast.success("Attendace send successfully....");
            }
            else{
                return response.status(500).json({message:"Internal server error",status:false});
            }
            }catch(err){
                toast.error("Something went wrong....");
            }
    }

    return<>
    <ToastContainer/>
            <div className="main-div">
                <div className="container container1">
                     <div className="row row1">
                          <div className="col-6">
                                <form onSubmit={submitForm} >
                                    <h2 id="heading">Attendance Form</h2>
                                    <input className=" input1" onChange={(event)=>setStdId(event.target.value)}  type="text mt-2" required placeholder="Student Id" />
                                    <input className=" input1" onChange={(event)=>setMonth(event.target.value)}  type="text" required placeholder="Month"/>
                                    <input className=" input1" onChange={(event)=>setPresent(event.target.value)}   min={1} max={26} type="text" required placeholder="Present Day" />
                                    <input className=" input1" onChange={(event)=>setAbsent(event.target.value)} min={1} max={26} type="text" required placeholder="Absent Day" />
                                    <button className="btn btn-success btn-success1" type="submit">Submit</button>
                                </form>
                          </div>
                     </div>
                </div>
            </div>
    </>
}
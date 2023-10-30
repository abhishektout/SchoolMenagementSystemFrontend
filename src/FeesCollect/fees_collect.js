import { useState } from "react"

export default function FeesCOllection() {
    const [studentId, setStudentId] = useState("");
    const [feeAmount, setFeeAmount] = useState(0);
    const [transactionId, setTransactionId] = useState("");

    const validateStudentId = () => {
        const pattern = /^[A-Z]{2,4}\d{6}$/;
        const isValid = pattern.test(studentId);
        return isValid;
    }
    const validateFeeAmount = () => {
        if (!feeAmount) {
            return false;
        }
        const feeAmountPattern = /^\d+(\.\d{1,2})?$/;
        return feeAmount.match(feeAmountPattern) ? true : false;
    }
    const validateTransactionHistory = () => {
        if (transactionId)
            return true;
        return false;
    }
    const submitButton = () => {
        if (validateStudentId() && validateFeeAmount && validateTransactionHistory){
            
            alert("all done")

        }
        else
            alert("something wrong")
    }
    return <>
        <div>
            <div>
                <h1 className="text-center">Throught Technology</h1>

                <h1 className="text-center">Fees Collection</h1>
            </div>
            <div className="row">
                <div className="col-md-6 text-end">
                    <label>Student Id</label>
                </div>
                <div className="col-md-6">
                    <input onBlur={(event) => setStudentId(event.target.value)} type="text" placeholder="enter student id" />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-6 text-end">
                    <label>Fee Amount</label>
                </div>
                <div className="col-md-6">
                    <input onBlur={(event) => setFeeAmount(event.target.value)} type="text" placeholder="enter fee amount" />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-6 text-end">
                    <label>Transaction Id</label>
                </div>
                <div className="col-md-6">
                    <input onBlur={(event) => setTransactionId(event.target.value)} type="text" placeholder="enter Transaction Id" />
                </div>
            </div>
            <div className="text-center mt-4">
                <button onClick={() => submitButton()}>Submit</button>
            </div>
        </div>
    </>
}
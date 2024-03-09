import { useState } from 'react'
import './ReqForm.css'
import axios from 'axios'



export default function RequestForm() {

    const [values, setValues] = useState({
        Name: '',
        Email:'',
        ClubName: '',
        ClubMotive:'',
        department: '',
        working:''
    })

    const onhandleChange = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    async function handleSubmit() {
        await axios.post(process.env.REACT_APP_BASE_URL + "/ClubRequestForm", { Name:values.Name[0], Email: values.Email[0], ClubName:values.ClubName[0], ClubMotive:values.ClubMotive[0], department: values.department[0], working: values.working[0] }).then((res)=>{
            console.log(res?.data);
        })
            .catch((err) => {
                console.log(err);
        })
    }

    return (
        <div className="container">
        <h1 className="heading">Want to start new Club</h1>
        <div className="box-container UploadContainer">
            <div className="box">
                <input type="text" name='Name' placeholder="Enter Name" onChange={onhandleChange}/><br/>
                <input type="email" name='Email' placeholder="Enter Email" onChange={onhandleChange}/><br/>
                <input type="text" name='ClubName' placeholder="Club Name" onChange={onhandleChange}/><br/>
                <input type="text" name='ClubMotive' placeholder="Club Motive" onChange={onhandleChange}/><br/>
                <input type="text" name='department' placeholder="Under which Department" onChange={onhandleChange}/><br />
                <input type="textarea" name='working' placeholder="How it will work?" onChange={onhandleChange}/><br/>
                <button onClick={handleSubmit}>Submit</button>
            
                </div>
        </div>
        </div>
    )
}
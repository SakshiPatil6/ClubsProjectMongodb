import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export default function CenAdminHome() {

    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get(process.env.REACT_APP_BASE_URL + "/readClubReqForm")
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="container">
                <h1 className="heading">Request List</h1>
                <div className="box-container">
                    {data.map((ClubRequestForm,index) => {
                        return <div key={index}>
                            <Card style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{ClubRequestForm.Name }</Card.Title>
                                    <Card.Text>
                                        Email: {ClubRequestForm.Email}<br />
                                        Club Name: {ClubRequestForm.ClubName} <br />
                                        Club Motive: {ClubRequestForm.ClubMotive} <br />
                                        Department: {ClubRequestForm.department} <br />
                                        Working: {ClubRequestForm.working} <br/>
                                    </Card.Text>
                                    <Button variant="primary">Accept</Button>
                                    <Button variant="danger">Reject</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })}
                </div>
            </div>

        </>
    );
}
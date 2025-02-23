// import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import "../stylesheets/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUpForm() {
    const navigate = useNavigate();
    return (

        <MDBContainer className="my-5 gradient-form" >
            <MDBRow>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">
                        <div className="text-center">
                            <img src="/images/logo.jpg"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are The ProjectX Team</h4>
                        </div>
                        <p>Create a new account</p>
                        <MDBInput wrapperClass='mb-4' label='Full Name' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form2' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password' />
                        <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password' />
                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger' onClick={() => navigate('/login')}>
                                Login
                            </MDBBtn>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0">ProjectX is a visual project management tool that helps individuals and teams organize tasks using boards, lists, and cards. It is commonly used for project tracking, task management, software development, content planning, HR, education, and event planning. ProjectX allows users to assign tasks, set deadlines, add comments, and integrate with other tools. It supports Agile and Kanban workflows to enhance collaboration and productivity.
                            </p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
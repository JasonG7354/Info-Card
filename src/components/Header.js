import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Header(){
    return (
        <header>
            <h1>Jason Garcia</h1>
            <h3 className="subtitle">Frontend Developer</h3>
            <h5>jasongarcia.website</h5> 
            <div className="button-margin">
                <a href = "mailto: jagarcia7354@outlook.com" target="_blank" rel="noopener noreferrer"><Button className= "button-width" variant="secondary" size="lg"><i className="bi-envelope-fill"></i>Email</Button></a>
                <a href = "https://www.linkedin.com/in/jason-garcia-75a542238/" target="_blank" rel="noopener noreferrer"><Button className="button-width"variant="primary" size="lg"><i className="bi-linkedin"></i>LinkedIn</Button></a>
            </div>
        </header>
    )
}
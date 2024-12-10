import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'; 
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'



function Footer() {
    return (
        <footer className='foot py-5'>
            <div className='contentcontainer'>
                <div className='row'>
                    <div className='col-md-3'>
                    
                    </div>
                    <div className='col-md-3 border-2'>
                        <h5>CONNECT WITH US</h5>
                        <ul className='list-unstyled'>
                            <li>+91 9567843340</li>
                            <li>info@deepnetsoft.com</li>

                        </ul>
                    </div>
                    <div className='col-md-3 border-1'>
                        <h5 className="logo-box"><img className="logo" src={logo}></img></h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/'></Link></li>
                            <li><Link to='/'></Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3 border-1'>
                        <h5>FIND US</h5>
                        <ul className='list-unstyled'>
                            <li>First floor, Geo infopar, <br/>infopark EXPY, kakkanad</li>
        
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
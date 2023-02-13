import React from 'react'
import Nav from 'react-bootstrap/Nav';
import '../styles/booking.css'

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Booking() {
  return (
    <div>
      <div className='body'style={{marginTop:"10px",height:825}}>
        <div className='container-flow col-md-12 border' style={{backgroundColor:"#71C562",borderRadius:"10px",height:"50px"}}>
            <Nav>
                <Nav.Item>
                    <span style={{marginLeft:"20px"}}> 
                      <Nav.Link className='navb'>Form Tour</Nav.Link>
                    </span>
                </Nav.Item>
            </Nav>   
        </div> 
        
        <div className='container-flow col-md-5 offset-5 '>
          <div className='heading'><h1>Registered Fields</h1></div>
        </div><br /> <br/> <br /> <br /> <br /> <br /> <br />
        <div className='container col-sm-12' style={{marginLeft:"12%"}}><br />
          <div className='row'>
            <div></div>
            <div className='col-lg-3 col-md-3  shadow-lg p-3 mb-5 ' >
              <h4 style={{textAlign:"center"}}>Field 1</h4>
              <div className='container col-8 '>
                <img src='public\logo512.png' className="mb-2 img-fluid img-thumbnail" height="150" width="190" alt="" />
              </div>
              <div className="container d-grid">
                <Button  variant="outline-dark" size="sm" className='mb-1'>
                  view
                </Button>
              </div>
            </div>
            <div className='col-sm-1'></div>
            <div className='col-lg-3 col-md-3  shadow-lg p-3 mb-5 '>
              <h4 style={{textAlign:"center"}}>Field 1</h4>
              <div className='container col-8 '>
                <img src='public\logo512.png' className=" mb-2 img-fluid img-thumbnail" height="150" width="190" alt="" />
              </div>
              <div className="container d-grid ">
                <Button  variant="outline-secondary" size="sm" className='mb-1'>
                  view
                </Button>
              </div>
            </div>
            <div className='col-sm-1'></div>
            <div className='col-lg-3 col-md-3 col-sm-12 shadow-lg p-3 mb-5'>
              <h4 style={{textAlign:"center"}}>Field 1</h4>
              <div className='container col-8 '>
                <img src='public\logo512.png' className=" mb-2 img-fluid img-thumbnail" height="150" width="190" alt="" />
              </div>
              <div className="container d-grid ">
                <Button  variant="outline-secondary" size="sm" className='mb-1'>
                  view
                </Button>
              </div>
            </div>
          </div><br />
        </div>
        <div className=''>    
          <span className='container col-md-2 offset-11'>
            <FontAwesomeIcon className='rounderounded-circle ' icon={faSpinner} rotate  size="2x" style={{color:"black",}}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Booking;
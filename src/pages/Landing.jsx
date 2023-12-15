import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Landing() {


  //function defenition
  // redirct from page to another page we can use useNavigate hook

  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/home')
  }

 


  return (
    <div>

      <Row className='align-items-center'>
        <Col></Col>
        
        <Col lg={6}>
          <h1>WELCOME TO VIDEOOO.COM</h1>
          <p style={{textAlign:'justify'}}>where user can their favourite videoos.user can upload any youtube videos by copy and paste their url in to videooo.com will allow to 
            add and remove their uploaded videos
                         and also arrange them in different categories by drag it is free try it now !!!
          </p>


          <button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More</button>



        </Col>



        <Col lg={5}>
          <img className='img-fluid' src="https://thumbs.dreamstime.com/b/editing-videos-mobile-phone-editing-videos-mobile-phone-using-video-editor-app-189278095.jpg" alt="nooo" />
        </Col>

      </Row>
    </div>
  )
}

export default Landing
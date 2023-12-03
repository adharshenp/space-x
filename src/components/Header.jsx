import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
function Header() {



  return (
    <>

      <div className='nav d-flex w-100'>

        <Navbar className=' w-100' bg="" data-bs-theme="dark" z expand="lg" >
          <Container>
            <Navbar.Brand href="#home"><img style={{ width: '200px', color: 'black' }} src="https://spacex-microsite.netlify.app/images/spacex-logo-big.png" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light fw-bolder mt-4' href="">FALCON 9 </Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light fw-bolder  mt-4' href="">FALCON HEAVY</Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">DRAGON</Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">STARSHIP</Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">HUMAN SPACEFLIGHT
                </Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">RIDESHARE
                </Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">STARSHIELD
                </Nav.Link>
                <Nav.Link id='top' style={{ fontSize: '13px' }} className='ms-3 text-light mt-4 fw-bolder ' href="">STARLINK</Nav.Link>

                <div className='d-flex justify-content-center align-items-between mt-4'>
                  <Nav.Link style={{ fontSize: '13px', marginLeft: '150px' }} className='fw-bolder d-flex ms-5 text-light ' href="">SHOP <i class='fa-solid fa-bars ms-4 mt-1'></i> </Nav.Link>

                </div>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className='justify-content' style={{ marginTop: '250px', paddingLeft: '150px' }} >
          <h5 className='py-4 text-light fw-normal'>UPCOMING LAUNCH</h5>
          <h1 style={{ marginTop: '-25px' }} className=' text-light fw-bold'>STARLINK MISSION</h1>
          <button className='btn btn-outline-light ps-4 pe-4
  py-3  rounded-0 mt-3 '>LEARN MORE</button>


     <div className='d-flex flex-column mt-5 '  >
      <h2 className=' flex-column mt-5'></h2>
      </div>  
     <div className=' mt-5 px-5 py-5'  >
      <h2 className=' flex-column mt-5'></h2>
      </div>  

      <div className='py-5 px-5 '  >
      <h2 className=' flex-column mt-5'></h2>
      </div>

      <div className=' px-2 '  >
      <h2 className=' flex-column mt-5'></h2>
      <h5 className='py-4 text-light fw-normal'>RECENT LAUNCH</h5>
      <h1 style={{ marginTop: '-25px' }} className=' text-light fw-bold'>STARSHIP'S SECOND</h1>
      <h1 style={{ marginTop: '-17px' }} className=' text-light fw-bold'>FLIGHT TEST</h1>
      <button className='btn btn-outline-light ps-4 pe-4
  py-3  rounded-0 mt-3 '>LEARN MORE</button>

      </div>




      


      <div className='d-flex flex-column mt-5 '  >
      <h2 className=' flex-column mt-5'></h2>
      </div>  
     <div className=' mt-5 px-5 py-5'  >
      <h2 className=' flex-column mt-5'></h2>
      </div>  

      <div className='py-5 px-5 '  >
      <h2 className=' flex-column mt-5'></h2>
      </div>
     
      <div className='py-5 px-5 '  >
      <h2 className=' flex-column mt-5'></h2>
      </div>

      <div className=' px-2 '  >
      <h2 className=' flex-column mt-5'></h2>
      <h5 className='py-4 text-light fw-normal'>RECENT LAUNCH</h5>
      <h1 style={{ marginTop: '-25px' }} className=' text-light fw-bold'>KOREA 425 MISSION</h1>
      <button className='btn btn-outline-light ps-4 pe-4
  py-3  rounded-0 mt-3 '>LEARN MORE</button>
      </div>


        </div>
    
      </div>  

    </>

  )
}

export default Header

import '../styles/heading.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function Preview()
{
    return(
    <div className='body' style={{}}>
        <h1 className="head1">Farm Tour</h1>

        <h2 className='preview'>Preview</h2>

        <div className='desc'>
        <Container>
            <Row>
                <Col className="p-2" md={6}>
                    <h3 className='desc0'>Description</h3>
                    <div className='desc1'>
                        Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.
                    </div>
                </Col>
                <Col className='image' >
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className='img1' alt="" height="300px" width="500px" />
                </Col>
            </Row>
        </Container>
        </div>

        <div >
        <Container>  
            <Row style={{marginLeft:"20%",marginTop:"2%"}}>  
                <Col className=" p-2"> <Button className='btn1' variant="success">
                Update ⚙️
            </Button></Col>  
                <Col className=" p-2">< Button className='btn2' variant="danger">
                Delete 🗑️
            </Button></Col>  
            </Row>  
        </Container>
        </div>
    </div>
    )
}

export default Preview;
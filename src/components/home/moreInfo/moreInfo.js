import { ParallaxBanner } from 'react-scroll-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MoreInfo() {
    return (
    <ParallaxBanner className="d-flex align-items-center justify-center"
        layers={[
            {
            image: '../../assets/images/bg2.jpg', speed: -15,
            },  
        ]}>
        <Col  className="more-info position-relative px-0 py-5 mx-0">
            <Container fluid>
                <h2 className="mt-5 pt-5 pb-3">Etiam commodo fringilla tortor odio.</h2>
                    <Row>
                    <Col className="mb-5 pb-5">
                        <p className="px-5 mx-5">Fusce congue lacus ac sapien pellentesque efficitur. Nam lacus nulla, malesuada a volutpat et, congue ut eros.</p>
                        <div className="my-5 btn-light-blue">
                            <a href="#">Learn More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
    </ParallaxBanner>
    )
}


export default MoreInfo
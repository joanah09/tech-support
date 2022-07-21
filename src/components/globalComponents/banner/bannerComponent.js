import { ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    return (
    <section className="banner col-12 px-0">
        <Container fluid className=" d-flex h-100 px-0 position-relative">
        <ParallaxBanner className="d-flex align-items-center justify-center"
            layers={[
                {
                image: '../../assets/images/bg1.jpg', speed: -20,
                },  
            ]}>
            <Container className="position-relative">
                    <Row className="w-100">
                    <Col xs sm className="mx-auto my-auto">
                    <Col xl={6} sm={12} className="title">
                    <h1>Maecenas vulputate fermentum nisl Etiam commoN fringilla</h1>
                    <h2>Etiam faucibus auctor dui eget sollicitudin. Sed condimentum ornare justo et auctor.</h2>
                        <div className="btn-transparent">
                            <a href="#">Learn More</a>
                        </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </ParallaxBanner>
        </Container>
        <div className="arrow"><FontAwesomeIcon icon="fas fa-chevron-down" /></div>
    </section>
    )
}

export default Banner
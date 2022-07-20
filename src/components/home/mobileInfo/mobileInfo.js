import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MobileInfo() {
    return (
        <Col className="mobile-info px-0 py-5 mx-0">
            <Container>
                <Row>
                    <Col sm={12} xl={{ span: 3, order: 2 }}>
                        <img className="mx-auto" src="../../assets/images/img5.jpg" alt=""/>
                    </Col>
                    <Col xl={{ span: 9, order: 1}} sm={12}>
                        <h2 className="pt-4 pb-5">Etiam vulputate, erat ac tempus pellentesque, nisi nunc vulputate ante.</h2>
                        <p>Phasellus rhoncus erat et mi dapibus, eget aliquam felis convallis. Aenean sed dapibus magna, a congue enim. Phasellus hendrerit bibendum sem vitae suscipit. Vestibulum in tempor lectus. Mauris congue id nulla sed ultrices. Aenean commodo, nibh eget pharetra consequat, lectus nunc suscipit est, vitae condimentum ipsum tellus et mauris. Mauris pulvinar id mi id ullamcorper.</p>
                        <div className=" my-5 btn-light-blue">
                            <a href="#">Learn More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
        
    )
}

export default MobileInfo
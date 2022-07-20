import ContactForm from "./contactForm";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Contact() {
    return(
    <Col className="contact px-0 pt-5 mx-0">
        <Container>
          <h2 className="pt-5 pb-3">Etiam commodo fringilla tortor odio.</h2>
          <p className="px-5 mx-5">Fusce congue lacus ac sapien pellentesque efficitur. Nam lacus nulla.</p>
          <ContactForm />
        </Container>
    </Col>
    )
}

export default Contact
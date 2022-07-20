import data from '../../../data';
import FeaturedItem from './featuredItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Features() {
  const featuredItems = data.homepage.features.map((item, id) => {
      return (
          <FeaturedItem key={id} {...item} />
      )
  })
  return (
    <Col className="features px-0 py-5">
      <Container>
      <h2 className="my-5 px-5">Maecenas vulputate fermentum nisl Etiam commodo fringilla tortor, et vulputate odio rutrum vel.</h2>
        <Row className="pb-3">{featuredItems}</Row>
      </Container>
  </Col>
    )
}

export default Features
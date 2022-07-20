import DesktopList from "./desktopInfoList";
import data from "../../../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Desktop() {
  const desktopList = data.homepage.desktopList.map((item, id) => {
    return (
      <DesktopList key={id} {...item} />
      )
    })

  return (
    <Col className="desktop-info px-0 py-5 mx-0">
      <Container>
      <h2 className="py-5">Etiam commodo fringilla tortor odio.</h2>
      <Row className="mb-5">
        <Col xl={7} sm={12}>
          <img className="" src="../../assets/images/img6.jpg" alt=""/>
        </Col>
        <Col xl={5} sm={12} className="mt-4">
            <p>Class aptent taciti sociosqu ad litora torquent per conubia</p>
            <ul className="mt-4 position-relative">
              {desktopList}
            </ul>
        </Col>
    </Row>
    </Container>
  </Col>
  )
}

export default Desktop
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";



const BootstrapTest =() => {
    return (
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
                <Container>
                <Row>
                <Col xs={6} md={4}>
                <Image src="https://i4.hurimg.com/i/hurriyet/75/0x0/56e3ffdd67b0a931607d99b7.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src="https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="https://fresco.wallset.ru/images/detailed/1208/3086.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
            </Col>
            <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Cold_river_in_spring_067776_.jpg" />
                    <Card.Body>
                    <Card.Title>Beach Brazil</Card.Title>
                    <Card.Text>
                    This is a girls from Braziliam Beach.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      );
}
const BootstrapButton =() => {
    return(
        <>
        <Button variant="primary">TEST BUTTON</Button>
      </>
    );
}




export {BootstrapButton, BootstrapTest};




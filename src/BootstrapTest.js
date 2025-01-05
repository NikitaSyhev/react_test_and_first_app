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
                <Image src="https://i.ytimg.com/vi/A8NAkjRDtPU/maxresdefault.jpg.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="https://avatars.dzeninfra.ru/get-zen_doc/1565406/pub_5f8f38d76dc8f92edae3e671_5f8f3ca32c1a69338e463d44/scale_1200" thumbnail />
        </Col>
      </Row>
    </Container>
            </Col>
            <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://fotobase.co/files/img/photo/brazilianki-na-pliazhe/brazilianki-na-pliazhe-0.webp" />
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
        <Button variant="primary">Primary</Button>
      </>
    );
}




export {BootstrapButton, BootstrapTest};




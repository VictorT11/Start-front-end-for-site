import React, { Component } from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import CaruselBox from "../components/CaruselBox";
class Home extends Component {
  render() {
    return (
      <>
        <CaruselBox />
        <Container>
          <h2 className="text-center m-4">Our Team</h2>
          <CardGroup className="m-3">
            <Card bg="info" border="dark" className="m-3" >
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/8872390/pexels-photo-8872390.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="our team"
              />
              <Card.Body>
                <Card.Title>Leaders</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Abot Us</Button>
              </Card.Body>
            </Card>

            <Card bg="info" border="dark" className="m-3">
              <Card.Body>
                <Card.Title>Gamers</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Abot Team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="our team"
              />
            </Card>

            <Card bg="info" border="dark" className="m-3">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="our team"
              />
              <Card.Body>
                <Card.Title>Society</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Our Society</Button>
              </Card.Body>
            </Card>

            
          </CardGroup>
          <CardGroup >
            <Card bg="info" border="dark" className="m-3">
              <Card.Body>
                <Card.Title>Games</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Our Games</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="our team"
              />
            </Card>     

              <Card bg="info" border="dark" className="m-3">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="our team"
              />
              <Card.Body>
                <Card.Title>News</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Discovery</Button>
              </Card.Body>
            </Card>       
          </CardGroup>
        </Container>
      </>
    );
  }
}

export default Home;

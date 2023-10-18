import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center m-4">Our Posts</h2>
                <Row>
                    <Col md="12">
                        <div className="d-flex m-5 border border-5 p-3" > 
                            <img
                                src="https://gepig.com/game_cover_460w/6005.jpg"
                                alt="Blog"
                                height={150}
                                
                            />
                            <div class>
                                <p >
                                Having just finished Resident Evil Village, I'm captivated. The game seamlessly blends horror and action, offering stunning visuals and intense moments. The narrative twists kept me hooked. It's a true evolution for the series, providing a thrilling and immersive experience.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex m-5 border border-5 p-3" > 
                            <img
                                src="https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1920x1080.jpg"
                                alt="Blog"
                                height={150}
                                
                            />
                            <div class>
                                <p >
                                Just completed Cyberpunk 2077 – an ambitious yet flawed masterpiece. Night City's sprawling beauty and narrative depth are awe-inspiring. Despite technical hiccups, the immersive storyline and freedom of choice make it an unforgettable journey, a must-play for sci-fi RPG enthusiasts.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;

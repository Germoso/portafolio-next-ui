import React from "react"
import { Text, Grid, Card, Row, Col, Modal, Button, Image, Input, Textarea } from "@nextui-org/react"

const Contact = () => {
    return (
        <>
            <Text id="contact" size={50} css={{ fontWeight: "bold", marginTop: 40 }}>
                Contact
            </Text>
            <Text size={26} css={{ textAlign: "center", fontStyle: "italic" }}>
                Let&apos;s make something good together...
            </Text>
            <Grid.Container justify="center" css={{ marginTop: 10 }}>
                <Grid xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <Row justify="center">
                                <Col>
                                    <Text size={20} b css={{ textAlign: "center", display: "block" }}>
                                        Send me an email
                                    </Text>
                                    <Text size={14} css={{ textAlign: "center" }}>
                                        Don&apos;t worry, I will get back to you as soon as possible.
                                    </Text>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Grid.Container gap={1}>
                                <Grid xs={12}>
                                    <Input placeholder="Name" width="100%" />
                                </Grid>
                                <Grid xs={12}>
                                    <Input placeholder="Email" width="100%" />
                                </Grid>
                                <Grid xs={12}>
                                    <Textarea width="100%" placeholder="Message" minRows={10} />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                        <Card.Footer>
                            <Row justify="flex-end">
                                <Button auto>Send</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    )
}

export default Contact

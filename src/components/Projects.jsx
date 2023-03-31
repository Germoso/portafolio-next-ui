import useFetch from "@/hooks/useFetch"
import React, { useState } from "react"
import { Text, Grid, Card, Row, Col, Modal, Button, Image } from "@nextui-org/react"
import Github from "@/icons/Github"
import { useRouter } from "next/router"

const Projects = () => {
    const { data } = useFetch("http://localhost:3000/api/portfolio")
    const [selectedItem, setSelectedItem] = useState({ title: "Prueba" })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()

    const goTo = (url) => {
        window.open(url, "_blank")
    }

    return (
        <>
            <Text id="portfolio" size={50} css={{ fontWeight: "bold", marginTop: 40 }}>
                My Portfolio
            </Text>
            <Grid.Container gap={2}>
                {data?.map((item) => (
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Card
                            isPressable
                            isHoverable
                            onPress={() => {
                                setSelectedItem(item)
                                setIsModalOpen(true)
                            }}
                        >
                            <Card.Body>
                                <Card.Image src={item.src} />
                            </Card.Body>
                            <Card.Footer css={{ flexDirection: "column" }}>
                                <Row>
                                    <Col>
                                        <Text b size={16} transform="uppercase" css={{ opacity: "50%" }}>
                                            {item.title}
                                        </Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text b size={14}>
                                            {item.description}
                                        </Text>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
            <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen} width="fit-content" closeButton>
                <Modal.Header css={{ flexDirection: "column", alignItems: "start" }}>
                    <Text b size={18}>
                        {selectedItem.title}
                    </Text>
                    <Text size={14}>{selectedItem.description}</Text>
                </Modal.Header>
                <Modal.Body>
                    <Image src={selectedItem.src} />
                </Modal.Body>
                <Modal.Footer css={{ overflow: "hidden" }}>
                    <Button
                        color="secondary"
                        flat
                        icon={<Github width={25} />}
                        auto
                        onPress={() => goTo(selectedItem.github)}
                    >
                        Repository
                    </Button>

                    <Button color={"gradient"} auto onPress={() => goTo(selectedItem.demo)}>
                        Webpage
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Projects

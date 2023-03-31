import React from "react"
import { Text, Grid, Card, Row } from "@nextui-org/react"
import useFetch from "@/hooks/useFetch"

const Skills = () => {
    const { data } = useFetch("http://localhost:3000/api/skills")

    return (
        <>
            <Text size={50} css={{ fontWeight: "bold" }}>
                My Skills
            </Text>
            <Grid.Container gap={2}>
                {data?.map((item) => (
                    <Grid xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <Card.Body>
                                <Card.Image src={item.src} />
                            </Card.Body>
                            <Card.Footer>
                                <Row justify="center">
                                    <Text b size={28}>
                                        {item.caption}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </>
    )
}

export default Skills

import React from "react"
import { Text, Row, Col } from "@nextui-org/react"

const Header = () => {
    return (
        <>
            <Row css={{ height: "100vh", marginTop: "-76px" }} justify="center" align="center">
                <Col>
                    <Text
                        h1
                        css={{
                            textAlign: "center",
                            textGradient: "45deg, $blue900 -20%, $purple600 50%",
                            "@xs": { fontSize: 55 },
                            "@sm": { fontSize: 100 },
                        }}
                    >
                        Alexander Germoso
                    </Text>
                    <Text css={{ textAlign: "center" }} size={18}>
                        I'm a web developer, passionate about programming with a strong focus on the React ecosystem.
                    </Text>
                </Col>
            </Row>
        </>
    )
}

export default Header

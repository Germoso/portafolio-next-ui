import Header from "@/components/Header"
import React from "react"
import { Container } from "@nextui-org/react"
import NavigationBar from "@/components/NavigationBar"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const index = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <Header />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </Container>
        </>
    )
}

export default index

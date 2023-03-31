import React from "react"
import { Navbar, Link } from "@nextui-org/react"
import Logo from "@/icons/Logo"

const NavigationBar = () => {
    return (
        <Navbar shouldHideOnScroll variant={"sticky"}>
            <Navbar.Brand css={{ gap: 10 }}>
                <Logo width={60} />
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link isActive href="#">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#portfolio">Portfolio</Navbar.Link>
                <Navbar.Link href="#contact">Contact me</Navbar.Link>
            </Navbar.Content>

            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link>Contact me</Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar

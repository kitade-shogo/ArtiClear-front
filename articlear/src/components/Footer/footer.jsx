import { Footer } from 'flowbite-react'
import { Container } from '@nextui-org/react'

const Footer1 = () => {
    return (
        <>
            <Footer container={true} className="bg-background1">
                <Footer.Copyright href="#" by="ArtiClear™" year={2022} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default Footer1

import { Footer } from 'flowbite-react'

const MyFooter = () => {
    return (
        <>
            <div className="fixed bottom-0 w-full z-50">
                <Footer container={true} className="rounded-none h-16">
                    <Footer.Copyright href="#" by="ArtiClear™" year={2023} />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </Footer>
            </div>
        </>
    )
}

export default MyFooter

import { Button } from '@nextui-org/react'
import { Sidebar } from 'flowbite-react'

const MySidebar = () => {
    return (
        <>
            <div className="w-fit bg">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items >
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#">Ruby</Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                label="15"
                            >
                                Rails
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="3">
                                JavaScript
                            </Sidebar.Item>
                            <Sidebar.Item href="#">React</Sidebar.Item>
                            <Sidebar.Item href="#">Next</Sidebar.Item>
                            <Sidebar.Item href="#">Python</Sidebar.Item>
                            <Sidebar.Item href="#">
                                <Button flat auto>
                                    Add New Folder
                                </Button>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}

export default MySidebar

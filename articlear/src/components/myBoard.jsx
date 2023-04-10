import { Card, User } from '@nextui-org/react'

const MyBoard = () => {
    return (
        <>
            <div className="w-96">
                <Card variant="bordered" isHoverable>
                    <div className="mx-6 my-6">
                        <Card.Header>
                            <User
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                name="Ariana Wattson"
                                description="UI/UX Designer @Github"
                                size="lg"
                            />
                        </Card.Header>
                        <Card.Body>
                            <div className="space-y-4">
                                <div>
                                    <p>
                                        "This Arrtiicle is very good for solve
                                        RUNTEQ midterm exam, Rails. "
                                    </p>
                                </div>
                                <Card.Divider />
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xl font-semibold">
                                            Title of Website
                                        </p>
                                        <p className="text-xs text-my-gray">
                                            https://github.com/kitade-shogo
                                        </p>
                                    </div>
                                    <img
                                        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                        alt="NextUI"
                                        className="w-28 object-contain rounded-sm"
                                    />
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default MyBoard

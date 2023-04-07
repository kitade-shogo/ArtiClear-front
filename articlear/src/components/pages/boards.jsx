import { Container, Grid } from '@nextui-org/react'
import MyBoard from '../myBoard'

const Boards = () => {
    return (
        <>
            <h1>What's others See</h1>
            <Container fluid>
                <Grid.Container justify="center">
                    <Grid xs={10} className="overflow-x-scroll">
                        <MyBoard />
                    </Grid>
                </Grid.Container>
            </Container>
        </>
    )
}

export default Boards

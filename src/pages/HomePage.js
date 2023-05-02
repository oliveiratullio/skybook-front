import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/hearder/Header"




export default function HomePage(){
    return (
        <Container>
            <Header />
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #303030;
`


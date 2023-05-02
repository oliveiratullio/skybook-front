import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/hearder/Header"
import Item from "../components/item/Item"




export default function HomePage(){
    return (
        <Container>
            <Header />
            <ItemContainer>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />

                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ItemContainer>
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
const ItemContainer = styled.div`
    width: 100%;
    min-height: 750;
    background-color: #303030;
    display: flex;
    flex-wrap: wrap;
`

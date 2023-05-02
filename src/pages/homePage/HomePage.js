import styled from "styled-components"
import Item from "../../components/item/Item"
import Header from "../../components/header/Header"




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

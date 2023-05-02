import styled from "styled-components"
import { MdDelete } from "react-icons/md"

export default function CartItem(){
    return (
        <>
        <Item>
            <BigCell>
                <img src="https://m.media-amazon.com/images/I/51KTTUgUm+L._SY346_.jpg" alt="image" width="70px" height="100px"/>
                <p>A Testemunha Ocular do Crime</p>
            </BigCell>
            <SmallCell>
                <p>R$29,90</p>
                <MdDelete size="30" color="#929292"/>
            </SmallCell>
        </Item>
        </>
    )
}

export const Item = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
`

export const BigCell = styled.div`
    width: 65%;
    height: 150px;
    display: flex;
    align-items: center;
    background-color: #121212;
    border: 1px solid;
    border-right: none;
    img{
        margin-left: 20px;
    }
    p{
        margin-left: 15px;
        font-size: 18px;
        font-weight: 600;
        color: #CBCBCB;
    }
`
export const SmallCell = styled.div`
    width: 35%;
    height: 150px;
    display: flex;
    align-items: center;
    background-color:  #121212;
    border: 1px solid;
    border-left: none;
    p{
        margin-left: 10px;
        margin-right: 170px;
        color: #CBCBCB;
    }
`

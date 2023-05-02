import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    min-height: 490px;
    display: flex;
    background-color: #1F1F1F;
`
export const LeftSide = styled.div`
    width: 70%;
    min-height: 470px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
   
`
export const LeftSideHeader = styled.div`
    width: 300px;
    height: 30px;
    display: flex;
    align-items: center;
    p{
        font-size: 20px;
        font-weight: 600;
        margin-left: 5px;
        color: #CBCBCB;
    }
`
export const Cart = styled.div`
    width: 100%;
    height: 50px;
    background-color: #121212;
    border-radius: 5px;
    display: flex;
`
export const BigCell = styled.div`
    width: 65%;
    height: 50px;
    display: flex;
    align-items: center;
    p{
        margin-left: 10px;
        color: #CBCBCB;
    }
`
export const SmallCell = styled.div`
    width: 35%;
    height: 50px;
    display: flex;
    align-items: center;
    p{
        margin-left: 10px;
        color: #CBCBCB;
    }
`
export const RightSide = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const Table = styled.div`
    width: 100%;
    height: 112px;
    background-color: #121212;
    margin-top: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`
export const TableHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid;
    
    h1{
        font-size: 25px;
        font-weight: 600;
        color: #CBCBCB;
    }
`
export const TableLine = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    p{
        font-size: 20px;
        font-weight: 500;
        margin-left: 30px;
        margin-right: 80px;
        color: #CBCBCB;
    }
`
export const RightSideButton = styled.button`
    width: 100%;
    height: 70px;
    background-color: #55A02B;
    color: #FFFFFF;
    margin-left: 20px;
    margin-top: 40px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        margin-left: 15px;
        text-decoration: underline;
    }
`
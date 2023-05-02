import styled from "styled-components"

export const CheckoutContainer = styled.div`
    width: 100%;
    min-height: 470px;
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
    align-items: center;
`
export const CheckoutForm = styled.form`
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`
export const FormHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    h2{
        font-size: 22px;
        margin-left: 10px;
        color: #D6CABD;
    }
`
export const BigCell = styled.input`
    width: 65%;
    height: 35px;
    margin-bottom: 15px;
    margin-right: 10px;

`
export const NormalCell = styled.input`
    width: 46%;
    height: 35px;
    margin-bottom: 15px;
    margin-right: 10px;

`
export const SmallCell = styled.input`
    width: 30%;
    height: 35px;
    margin-bottom: 15px;
    margin-right: 10px;

`
export const AdressFormButton = styled.button`
    width: 40%;
    height: 70px;
    background-color: #55A02B;
    color: #FFFFFF;
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
export const RightSide = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const CheckoutOptions = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`
export const PaymentOption = styled.div`
    width: 100%;
    min-height: 35px;
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    margin-bottom: 15px;
    p{
        margin-left: 20px;
    }

`
export const PaymentName = styled.div`
    width: 30%;
    height: 34px;
    display: flex;
    align-items: center;
    margin-left: 15px;
`
export const PaymentSymbol = styled.div`
    width: 15%;
    height: 34px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    justify-content: right;
`
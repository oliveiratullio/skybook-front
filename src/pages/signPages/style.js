import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    
`

export const ClientForm = styled.form`
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 20px;

`
export const FormInput = styled.input`
    width: 490px;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 15px;
`
export const FormButton = styled.button`
    width: 500px;
    height: 35px;
    background-color: #AE370D;
    border: none;
    border-radius: 5px;
`
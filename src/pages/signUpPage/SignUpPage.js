import styled from "styled-components";
import Header from "../../components/header/Header";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    return(
        <>
        <Header />
        <FormContainer>
            <NewClient>
                <FormInput placeholder="Nome" />
                <FormInput placeholder="E-mail" />
                <FormInput placeholder="CPF" />
                <FormInput placeholder="Senha" />
                <FormButton>CRIAR CONTA</FormButton>
            </NewClient>
            <Link style={{textDecoration: "none"}} to="/entrar">
                <p>Já é cliente? Ir para a página de Login</p>
            </Link>
        </FormContainer>
        
        </>
    )
}

export const FormContainer = styled.div`
    width: 100%;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const NewClient = styled.form`
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;

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
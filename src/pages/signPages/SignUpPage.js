import styled from "styled-components";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import {FormContainer, ClientForm, FormInput, FormButton} from "./style"

export default function SignUpPage(){
    return(
        <>
        <Header />
        <FormContainer>
            <h1>CRIE SUA CONTA</h1>
            <ClientForm>
                <FormInput placeholder="Nome" />
                <FormInput placeholder="E-mail" />
                <FormInput placeholder="CPF" />
                <FormInput placeholder="Senha" />
                <FormButton>CRIAR CONTA</FormButton>
            </ClientForm>
            <Link style={{textDecoration: "none"}} to="/entrar">
                <p>Já é cliente? Ir para a página de Login</p>
            </Link>
        </FormContainer>
        
        </>
    )
}


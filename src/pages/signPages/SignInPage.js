
import Header from "../../components/header/Header";
import { ClientForm, FormButton, FormContainer, FormInput } from "./style";
import { Link } from "react-router-dom";

export default function SignInPage(){
    return(
        <>
        <Header />
        <FormContainer>
            <h1>FAÇA O LOGIN</h1>
            <ClientForm>
                <FormInput placeholder="E-mail" />
                <FormInput placeholder="Senha" />
                <FormButton>LOGIN</FormButton>
            </ClientForm>
            <Link style={{textDecoration: "none"}} to="/cadastrar">
                <p>Ainda não é cliente? Crie sua conta</p>
            </Link>
        </FormContainer>
        </>
    )
}


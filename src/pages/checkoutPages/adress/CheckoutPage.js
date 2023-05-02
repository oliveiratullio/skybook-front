import Header from "../../../components/header/Header";
import { TbTextPlus } from "react-icons/tb"
import CartTable from "../../../components/cartTable/CartTable";
import { CheckoutContainer, LeftSide, CheckoutForm, FormHeader, BigCell, NormalCell, SmallCell, AdressFormButton, RightSide } from "../style"

export default function CheckoutPage(){
    return(
        <>
        <Header />
        <CheckoutContainer>
            <LeftSide>
                <CheckoutForm>
                    <FormHeader>
                        <TbTextPlus color="#EF4F26" size="30"/>
                        <h2>Adicionar endereço</h2>
                    </FormHeader>
                    <NormalCell placeholder="CEP" required/>
                    <BigCell placeholder="Logradouro" required/>
                    <SmallCell placeholder="Número" required/>
                    <NormalCell placeholder="Bairro" required/>
                    <NormalCell placeholder="Cidade" required/>
                    <NormalCell placeholder="Estado" required/>
                    <NormalCell placeholder="Telefone" required/>
                    <AdressFormButton>Confirmar Endereço</AdressFormButton>
                </CheckoutForm>
            </LeftSide>
            <RightSide>
                <CartTable />
            </RightSide>
        </CheckoutContainer>
        </>
    )
}


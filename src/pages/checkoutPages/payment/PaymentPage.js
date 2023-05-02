import Header from "../../../components/header/Header";
import { CheckoutContainer, CheckoutForm, FormHeader, LeftSide, CheckoutOptions, PaymentOption, PaymentName, PaymentSymbol} from "../style";
import { BsFillCreditCardFill } from "react-icons/bs"
import { RiCheckboxBlankCircleFill, RiBarcodeLine } from "react-icons/ri"
import { SiPix } from "react-icons/si"

export default function PaymentPage(){
    return (
        <>
            <Header />
            <CheckoutContainer>
                <LeftSide >
                    <CheckoutOptions>
                    <FormHeader >
                        <BsFillCreditCardFill color="#EF4F26" size="30"/>
                        <h2>Método de Pagamento</h2>
                    </FormHeader>
                    <PaymentOption>
                        <PaymentName>
                            < RiCheckboxBlankCircleFill />
                            <p>PIX</p>
                        </PaymentName>
                        <PaymentSymbol>
                            <SiPix />
                        </PaymentSymbol>
                    </PaymentOption>
                    <PaymentOption>
                        <PaymentName>
                            < RiCheckboxBlankCircleFill />
                            <p>BOLETO BANCÁRIO</p>
                        </PaymentName>
                        <PaymentSymbol>
                            <RiBarcodeLine />
                        </PaymentSymbol>
                    </PaymentOption>
                    <PaymentOption>
                        <PaymentName>
                            < RiCheckboxBlankCircleFill />
                            <p>CARTÃO DE CRÉDITO</p>
                        </PaymentName>
                        <PaymentSymbol>
                            <BsFillCreditCardFill />
                        </PaymentSymbol>
                    </PaymentOption>
                    
                    </CheckoutOptions>
                </LeftSide>
            </CheckoutContainer>
        </>
    )
}
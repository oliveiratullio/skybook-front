import Header from "../../components/header/Header";
import {IoMdCart} from "react-icons/io"
import CartItem from "../../components/cartItem/CartItem";
import { CartContainer, LeftSide, LeftSideHeader, Cart, BigCell, SmallCell, RightSide, RightSideButton} from "./style"
import CartTable from "../../components/cartTable/CartTable";

export default function CartPage(){
    return (
        <>
            <Header />
            <CartContainer>
                <LeftSide>
                    <LeftSideHeader>
                        <IoMdCart color="#EF4F26" size="25"/>
                        <p> MEU CARRINHO</p>
                    </LeftSideHeader>
                    <Cart>
                        <BigCell><p>Produto</p></BigCell>
                        <SmallCell><p>Preço</p></SmallCell>
                    </Cart>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </LeftSide>
                <RightSide>
                    <CartTable />
                    <RightSideButton>
                    <IoMdCart color="#FFFFFF" size="25"/>
                       <p>FINALIZAR PEDIDO</p>
                    </RightSideButton>
                </RightSide>
            </CartContainer>
        </>
    )
}

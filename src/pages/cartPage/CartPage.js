import Header from "../../components/header/Header";
import {IoMdCart} from "react-icons/io"
import CartItem from "../../components/cartItem/CartItem";
import { CartContainer, LeftSide, LeftSideHeader, Cart, BigCell, SmallCell, RightSide, Table, TableHeader, TableLine, RightSideButton} from "./style"

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
                    <Table>
                        <TableHeader>
                            <h1>Resumo</h1>
                        </TableHeader>
                        <TableLine>
                            <p>Total</p>
                            <p>R$89,70</p>
                        </TableLine>
                    </Table>
                    <RightSideButton>
                    <IoMdCart color="#FFFFFF" size="25"/>
                       <p>FINALIZAR PEDIDO</p>
                    </RightSideButton>
                </RightSide>
            </CartContainer>
        </>
    )
}

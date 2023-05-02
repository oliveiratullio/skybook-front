import { Link } from "react-router-dom"
import styled from "styled-components"
import { MdAccountCircle, MdContactSupport, } from "react-icons/md"
import { IoMdHeart, IoMdCart, IoIosMenu } from "react-icons/io"
import { HeaderContainer, HeaderLine, Logo, TopHeaderCell, ShoppingCart, Categories, TextBox, SearchInput } from "./style"


export default function Header(){
    return(
        <HeaderContainer>
          <HeaderLine>
            <Link style={{textDecoration: "none"}} to="/">
              <Logo><h1>Skybook</h1></Logo>
            </Link>
            <TopHeaderCell> 
                <div>
                    <MdAccountCircle color="#EF4F26" size="30"/>
                </div>
                <div>
                    <p>MINHA CONTA</p>
                    <h2>ENTRAR/CADASTRO</h2>
                </div>
            </TopHeaderCell>
            <TopHeaderCell> 
                <div>
                    <MdContactSupport color="#EF4F26" size="30"/>
                </div>
                <div>
                    <p>ATENDIMENTO</p>
                    <h2>AO CLIENTE</h2>
                </div>
            </TopHeaderCell>
            <TopHeaderCell> 
                <div>
                    <IoMdHeart color="#EF4F26" size="30"/>
                </div>
                <div>
                    <p>MEUS</p>
                    <h2>FAVORITOS</h2>
                </div>
            </TopHeaderCell>
            <ShoppingCart>
               <div>
                   <IoMdCart size="30"/>
               </div>
               <div>
                    <h1>CARRINHO</h1>
                    <p>0 produto</p>
               </div>
            </ShoppingCart>
        </HeaderLine>
        <HeaderLine>
            <Categories>
                <IoIosMenu size="30" />
                <TextBox>
                <h2>ACESSE TODAS AS</h2>
                <h1>CATEGORIAS</h1>
                </TextBox>
            </Categories>
            <SearchInput placeholder="Digite o que você procura..."></SearchInput>
        </HeaderLine>
    </HeaderContainer>
    )
}


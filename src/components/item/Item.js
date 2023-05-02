import styled from "styled-components"

export default function Item(){
    return(
        <BookItem>
           <BookImage>
               <img src="https://m.media-amazon.com/images/I/51KTTUgUm+L._SY346_.jpg" alt="image" width="200px" height="280px"/>
           </BookImage>
           <Title>
               A Testemunha Ocular do Crime
           </Title>
           <Price>R$ 29,90</Price>
       </BookItem>
    )
}

export const BookItem = styled.div`
    width: 250px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 20px;

`
export const BookImage = styled.div`
    width: 200px;
    height: 280px;
    margin-top: 20px;
`
export const Title = styled.div`
    width: 80%;
    height: auto;
    margin-top: 10px;
    display: flex;
    justify-content: left;
    font-size: 14px;
    font-weight: 700;
`
export const Price = styled.div`
    width: 80%;
    height: auto;
    margin-top: 15px;
    font-size: 16px;

`
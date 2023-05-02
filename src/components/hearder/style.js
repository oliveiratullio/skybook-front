import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 140px;
    background-color: #303030;
    display: flex;
    flex-direction: column;
`
export const HeaderLine = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #303030;
`
export const Logo = styled.div`
    width: 200px;
    height: 55px;   
    margin-left: 20px;
    margin-right: 210px;
    h1{
        font-weight: bold;
        font-size: 50px;
        color: #EF4F26;
    }
`
export const TopHeaderCell = styled.div`
    width: auto;
    height: 55px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin-right: 55px;
    p{
        font-size: 12px;
        margin-left: 10px;
    }
    h2{
        font-size: 14px;
        margin-left: 10px;
        font-weight: bold;
    }
`
export const ShoppingCart = styled.button`
    width: 180px;
    height: 55px;
    background-color: #519828;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    padding-left: 20px;
    justify-content: space-between;
    border: none;
    h1{
        font-size: 16px;
        font-weight: bold;
        margin-right: 30px;
        margin-left: 10px;
    }
    p{
        font-size: 12px;
        margin-right: 30px;
        margin-lef10pxt
    }
`
export const Categories = styled.button`
    width: 400px;
    height: 55px;
    margin-left: 20px;
    background-color: #EC4D16;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 15px;
    }
    h1{
        font-size: 28px;
        font-weight: bold;
    }
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 10px;
`
export const SearchInput = styled.input` 
    width: 750px;
    height: 40px;
    margin-left: 30px;
    border-radius: 5px;
    border: none;
    background-color: #121212;
`
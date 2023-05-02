import styled from "styled-components"

export default function CartTable(){
    return(
        <>
            <Table>
                <TableHeader>
                    <h1>Resumo</h1>
                </TableHeader>
                <TableLine>
                    <p>Total</p>
                    <p>R$89,70</p>
                </TableLine>
            </Table>
        </>
    )
}

const Table = styled.div`
    width: 100%;
    height: 112px;
    background-color: #121212;
    margin-top: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`
const TableHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid;
    
    h1{
        font-size: 25px;
        font-weight: 600;
        color: #CBCBCB;
    }
`
const TableLine = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    p{
        font-size: 20px;
        font-weight: 500;
        margin-left: 30px;
        margin-right: 80px;
        color: #CBCBCB;
    }
`
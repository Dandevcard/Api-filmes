import styled from 'styled-components'

export const Headerr = styled.header`
    background-color: #4C16C9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 100vw;
    padding: 0 3rem;
    
    p {
        color: #fff;
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 1008px;
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    margin: 50px auto;
    padding-bottom:32px;

    border-bottom: 1px solid #D8E1EB;

    .ave-value{
        display: flex;
        justify-content: space-between;
    
    .filter-movies{
        display: flex;
        gap: 10px;
    }
    input {
        outline: none;
        height: 34px;
        padding: 0 10px;
    }
    select {
        height: 34px;
        padding: 0 10px;
    }
    }
`

import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: red; */
    position: relative;
    width: 250px;
    height: 328px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .img-container {
        width: 100%;
        height: 160px;
        background-color:#ABBBCC;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

    }
.wrapper-geral{
    display: flex;
    flex-direction: column;
    padding: 2px 12px;
    gap: 5px;
}
.wrapper-items{
    h2 {
        font-size: 18px;
    }
    p {
        font-size: 14px;
        color:rgba(12, 25, 50, 0.6);
        font-weight: 400;
    }
}
.award{
    display: flex;
}
.wrapper-budget{
    position: absolute;
    bottom: 10px;
    width: 80%;
    display: flex;
    justify-content: space-between;

}
`
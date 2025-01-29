import styled from 'styled-components';

export const Container = styled.div`
    /* margin: 0 auto; */
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding-bottom: 100px;
`
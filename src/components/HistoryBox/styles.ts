import styled from 'styled-components'; 

interface ICustomLegendProps {
    color: string
}

export const Container = styled.div`
    width: 100%;
    height: 400px;
    
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    /* margin: 10px 0; */
    padding: 15px 20px 60px 0px;

    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 400px;
`;

export const Header = styled.header`
    width: 100%;
    
    // Coloca os elementos lado a lado por padrão 
    display: flex;
    // space-between deixando um em cada ponta do header 
    justify-content: space-between;
    
    > h2 {
        margin-bottom: 20px;
        padding-left: 38px;
    }

    @media(max-width: 1280px){
        flex-direction: column;
    }
`; 

export const LegendContainer = styled.ul`
    list-style: none;
    
    display: flex;
    padding-right: 23px;  
`;

export const CustomLegend = styled.li<ICustomLegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 15px;
    font-size: 14px;

    > div {
        background-color: ${props => props.color};

        width: 23px;
        height: 23px;
        border-radius: 3px; 

        font-size: 18px;
        line-height: 40px; 
        text-align: center;
    }

    > span {
        margin-left: 3px;
    }

    @media(max-width: 1280px){
        /* > div {
            width: 30px;
            height: 30px;
        } */

        margin-left: 38px;
    }
`;
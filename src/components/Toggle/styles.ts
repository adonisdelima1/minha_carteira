import styled from "styled-components"; 
import Switch, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex; 
    align-items: center;
`

export const ToggleLabbel = styled.span`
    color: ${props => props.theme.colors.white};
`

//   Quando aplicamos estilo a elementos puramente html, usamos a notação 
// "styled." que vem acompanhada do nome do elemento html. Agora, se a intenção 
// é estilizar um componente pronto, utilizamos uma notação que é como se 
// fosse uma chamada de método, "styled(nomeDoComponent)", e quando queremos 
// mexer nas propriedades desse component devemos indicar a notação 
// especificando a interface que cuida das props do component 
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    }))<ReactSwitchProps>`
        // 0 para em cima e embaixo e 7px para direita e esquerda 
        margin: 0 7px;
    `;
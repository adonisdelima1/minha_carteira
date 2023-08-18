import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles'; 

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; 

export default function Button(props: IButtonProps) {
    return (
        //   O botão Foi configurado para Receber informações como vindas como 
        // children ao invés de receber os atributos HTML de Botão via props, 
        // como foi feito com o input de texto. Pelo fato do botão ser capaz de 
        // receber elementos filhos, as propriedades do botão foram colocadas 
        // nesse component como children do component.
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}
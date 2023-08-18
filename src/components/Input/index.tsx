import { InputHTMLAttributes } from 'react';
import { Container } from './styles'; 

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: IInputProps) {
    return (
        <Container {...props}>

        </Container>
    );
}
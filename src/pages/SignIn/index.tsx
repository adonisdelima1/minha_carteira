import { useState } from "react";

import Input from "../../components/Input";

import { 
    Container, 
    Logo, 
    Form,
    FormTitle 
} from "./styles"; 

import logoImg from '../../assets/logo.svg';
import Button from "../../components/Button";
import { useAuthContext } from "../../hooks/auth";

export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>(''); 

    const { signIn } = useAuthContext();
    
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha CarteiraS" />
                <h2>Minha Carteira</h2>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>
                    <h3>Entrar</h3>
                </FormTitle>
                
                <Input 
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}
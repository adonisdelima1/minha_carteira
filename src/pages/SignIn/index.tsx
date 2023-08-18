import Input from "../../components/Input";

import { 
    Container, 
    Logo, 
    Form,
    FormTitle 
} from "./styles"; 

import logoImg from '../../assets/logo.svg';

export default function SignIn() {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha CarteiraS" />
                <h2>Minha Carteira</h2>
            </Logo>
            <Form onSubmit={() => {}}>
                <FormTitle>
                    <h3>Entrar</h3>
                </FormTitle>
                
                <Input 
                    type="email"
                    placeholder="e-mail"
                    required
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                />

                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}
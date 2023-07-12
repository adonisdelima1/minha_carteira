import { 
    Container, 
    Profile, 
    Welcome, 
    UserName 
} from './styles'; 

export default function MainHeader() {
    return(
        <Container>
            <h1>Toggle</h1>

            <Profile>
                <Welcome>Olá, </Welcome>
                <UserName>Adonis Dias</UserName>
            </Profile>
        </Container>
    );
}


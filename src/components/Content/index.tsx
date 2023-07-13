import { Container } from './styles'; 

export default function Content(props: any) {
    return(
        <Container>
            {props.children}
        </Container>
    );
}


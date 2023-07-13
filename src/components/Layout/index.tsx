import { Container } from './styles'; 

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

export default function Layout(props: any) {
    return(
        <Container>
            <MainHeader />
            <Aside />
            <Content>
                {props.children}
            </Content>
        </Container>
    );
}


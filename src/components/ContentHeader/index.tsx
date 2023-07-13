import { 
    Container,
    TitleContainer, 
    DateFilters 
} from './styles';

interface IContentHeaderProps {
    title: string; 
    lineColor: string;
    children: React.ReactNode;
}

// Uma outra opção de declaração de um compontente funcional com interface 
// export default const ContentHeader: React.FC<IContentHeaderProps> = ({})

export default function ContentHeader(props: IContentHeaderProps){
    return(
        <Container>
            <TitleContainer lineColor = {props.lineColor}>
                <h1>{props.title}</h1>
            </TitleContainer>
            <DateFilters>
                {props.children}
            </DateFilters>
        </Container>
    );
}
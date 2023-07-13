import { Container, Tag } from './styles'; 

interface ICashFlowCardProps {
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string,
}

export default function CashFlowCard(props: ICashFlowCardProps) {
    return(
        <Container>
            <Tag color={props.tagColor} /> 
            <div>
                <span>{props.title}</span>
                <small>{props.subtitle}</small>
            </div>  
            <h3>{props.amount}</h3>
        </Container>
    );
}


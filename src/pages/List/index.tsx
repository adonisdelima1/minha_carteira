import CashFlowCard from "../../components/CashFlowCard";
import Content from "../../components/Content";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";


export default function List() {
    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7931B">
                <SelectInput 
                    options={[]} 
                    onChange={() => {}}
                />
            </ContentHeader>

            <Content>
                <CashFlowCard 
                    title="Conta de Luz"
                    subtitle="13/07/2023"
                    tagColor="#E44C4E"
                    amount="R$130,00"
                />
            </Content>
        </Container>
    );
}
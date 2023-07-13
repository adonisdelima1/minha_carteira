import CashFlowCard from "../../components/CashFlowCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";


export default function List() {

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'}
    ]
    
    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018}
    ]

    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7931B">
                <SelectInput 
                    options={months} 
                    onChange={() => {}}
                />
                <SelectInput 
                    options={years} 
                    onChange={() => {}}
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button" 
                    className="tag-filter tag-filter-recurrent">
                        Recorrentes
                </button>
                <button 
                    type="button" 
                    className="tag-filter tag-filter-eventual">
                        Eventuais
                </button>
            </Filters>

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
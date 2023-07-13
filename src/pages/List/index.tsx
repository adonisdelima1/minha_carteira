import { useMemo } from "react";
import CashFlowCard from "../../components/CashFlowCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";

export default function List() {

    let { type } = useParams();

    // Vai definir se o título da page será de entradas ou saídas 
    const listPageHeader = useMemo(() => {
        switch (type) {
            case 'incomes': 
                return ({ 
                            title: 'Entradas', 
                            lineColor: '#F7931B' 
                        });

            case 'outgoes': 
                return ({ 
                            title: 'Saídas', 
                            lineColor: '#E44C4E' 
                        });

            default: 
                return ( 
                    { 
                        title: 'CONTEÚDO NÃO ENCONTRADO', 
                        lineColor: '#E44C4E' 
                    });
        }
    }, [type]);

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
            <ContentHeader title={listPageHeader.title} lineColor={listPageHeader.lineColor}>
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
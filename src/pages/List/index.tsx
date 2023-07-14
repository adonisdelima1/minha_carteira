import { useEffect, useMemo, useState } from "react";
import CashFlowCard from "../../components/CashFlowCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";
import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses';

interface IData {
    id: string,
    description: string,
    formattedAmount: string,
    frequency: string, 
    formattedDate: string, 
    tagColor: string
}

export default function List() {

    // Raw data from repositories 
    const [data, setData] = useState<IData[]>([]);
    
    
    // Recebendo o tipo de lista que é informado na url ('incomes' ou 'outgoes') 
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

    const listData = useMemo(() => {
        switch (type) {
            case 'incomes': return gains;
            case 'outgoes': return expenses;
            default: return new Array();
        }
    }, [type])

    useEffect(() => {
        const response = listData.map((item, index) => {
            return {
                id: String(index),
                description: item.description,
                formattedAmount: item.amount,
                frequency: item.frequency, 
                formattedDate: item.date, 
                tagColor: item.frequency === 'recorrente' ? 
                '#4E41F0' : '#E44C4E',
            }
        });

        setData(response);
    },[])


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
                {
                    data.map(item => {

                        return ( 
                            <CashFlowCard 
                                key={item.id}
                                title={item.description}
                                subtitle={item.formattedDate}
                                tagColor={item.tagColor}
                                amount={item.formattedAmount} 
                            />
                        )
                    })

                }
            </Content>
        </Container>
    );
}
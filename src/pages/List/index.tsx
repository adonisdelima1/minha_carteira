// React Hooks
import { useEffect, useMemo, useState } from 'react';

// React Router Dom
import { useParams } from 'react-router-dom';

// My Styles
import { Container, Content, Filters } from "./styles";

// My Components
import CashFlowCard from "../../components/CashFlowCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// My utils
import formatToBrazilianReal from '../../utils/currencyFormatter'; 
import formatToBrazilianDateFormat from '../../utils/dateFormatter';

// Data
import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses';
import {years, months} from '../../repositories/time';

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

    // Estados dos filtros de mês e ano 
    // Acrescentamos 1 ao mês obtido porque janeiro tem id = 0
    const [selectedMonth, setSelectedMonth] = 
        useState<string>(String(new Date().getMonth() + 1));
    const [selectedYear, setSelectedYear] = 
        useState<string>(String(new Date().getFullYear()));
    
    // Obtendo o tipo de lista informado na url ('incomes' ou 'outgoes') 
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

    // Usando o type obtido via useParams para decidir quais dados obter
    const listData = useMemo(() => {
        switch (type) {
            case 'incomes': return gains;
            case 'outgoes': return expenses;
            default: return new Array();
        }
    }, [type])


    useEffect(() => {
        const listToBeFiltered = listData;
        
        const itemsFiltereByMonthAndYear = listToBeFiltered.filter(item => { 
            const date = new Date(item.date); 
            return String(date.getMonth() + 1) === selectedMonth 
                && String(date.getFullYear()) === selectedYear;
        });
        
        const formattedData = itemsFiltereByMonthAndYear.map(item => {
            return {
                id: String(Math.random () * data.length),
                description: item.description,
                formattedAmount: formatToBrazilianReal(Number(item.amount)),
                frequency: item.frequency, 
                formattedDate: formatToBrazilianDateFormat(item.date), 
                tagColor: item.frequency === 'recorrente' ? 
                '#4E41F0' : '#E44C4E',
            }
        }) 

        setData(formattedData);
    
    }, [listData, selectedMonth, selectedYear]);

    return (
        <Container>
            <ContentHeader title={listPageHeader.title} lineColor={listPageHeader.lineColor}>
            <SelectInput 
                options={months} 
                defaultValue={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
            />
            <SelectInput 
                options={years} 
                defaultValue={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
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
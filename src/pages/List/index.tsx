// React Hooks
import { useEffect, useMemo, useState } from 'react';

// React utils
import uuid from 'react-uuid';

// React Router Dom
import { useParams } from 'react-router-dom';

// My Styles
import { Container, Content, Filters } from "./styles";

// My Components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import CashFlowCard from "../../components/CashFlowCard";

// My utils
import formatToBrazilianReal from '../../utils/currencyFormatter'; 
import formatToBrazilianDateFormat from '../../utils/dateFormatter';

// Data
import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses';
import listOfMonths from '../../repositories/months';

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
        useState<number>(new Date().getMonth() + 1);
    
    // This line is commented because the current year is not 2023 anymore 
    // const [selectedYear, setSelectedYear] = 
    //     useState<number>(new Date().getFullYear());
    
    // Setting 2023 hardcoded because the hardcoded records are from 2023
    const [selectedYear, setSelectedYear] = 
    useState<number>(2023);

    const [frequencyFilterSelected, setFrequencyFilterSelected] = 
        useState<string[]>(['recorrente', 'eventual']);

    // Obtendo o tipo de lista informado na url ('incomes' ou 'outgoes') 
    let { type: balanceType } = useParams();

    //   Vai definir se o título da page será de entradas ou saídas e também 
    // quais dados obter, se de entradas ou saídas  
    const listPageHeaderAndContent = useMemo(() => {
        switch (balanceType) {
            case 'incomes': 
                return ({ 
                            title: 'Entradas', 
                            lineColor: '#F7931B',
                            listData: gains 
                        });

            case 'outgoes': 
                return ({ 
                            title: 'Saídas', 
                            lineColor: '#E44C4E',
                            listData: expenses 
                        });

            default: 
                return ( 
                    { 
                        title: 'CONTEÚDO NÃO ENCONTRADO', 
                        lineColor: '#E44C4E',
                        listData: new Array() 
                    });
        }
    }, [balanceType]); 


    //   Essa implementação de years nos permite adicionar às opções de filtro 
    // apenas os anos dos registros obtidos dos arquivos hardcoded na pasta  
    const years = useMemo(() => {
        
        let uniqueYears: number[] = [];

        //   A linha abaixo foi comentada para evitar que, quando estejamos 
        // mostrando conteúdo de saídas, a dropdown do ano não seja afetada por 
        // datas encontradas na lista de entrada, por exemplo. 
        // [...expenses, ...gains].forEach(item => {
        [...listPageHeaderAndContent.listData].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            // Esse check está aqui para evitar valores duplicados na dropdown
            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            };
        });

    }, [listPageHeaderAndContent.listData]);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index+1,
                label: month
            };
        });
    }, []); 


    // Um jeito alternativo de declarar a função handleFrequencyClick
    // function handleFrequencyClick('recorrente') {}

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = 
            frequencyFilterSelected.findIndex(item => item === frequency);

        if (alreadySelected >= 0) {
            const filtered = 
                frequencyFilterSelected.filter(item => item !== frequency)
            setFrequencyFilterSelected(filtered);
        } else {
            setFrequencyFilterSelected(prev => [...prev, frequency]);
        }
    }

    //   As funções 'handleSelectedYear' e 'handleSelectedMonth' foram 
    // sugeridas pelo instrutor do curso porque a obtenção do value de um 
    // elemento selecionado (através do 'get' usando 'e.target.value') resulta 
    // em uma string, mas essas funções se tornam desnecessárias quando 
    // convertemos o value para number lá mesmo na implementação do atributo 
    // onClick(). A intenção foi mantê-las apenas para preservar exemplos de 
    // uso do try-catch. 

    // const handleSelectedYear = (year: string) => {
    //     try {
    //         const parsedYear = Number(year);
    //         setSelectedYear(parsedYear);
    //     } 
    //     catch{
    //         throw new Error('Invalid value for year selected.');
    //     }
    // }
    
    // const handleSelectedMonth = (month: string) => {
    //     try {
    //         const parsedMonth = Number(month);
    //         setSelectedMonth(parsedMonth);
    //     } 
    //     catch{
    //         throw new Error('Invalid value for month selected.');
    //     }
    // }

    useEffect(() => {
        const listToBeFiltered = new Array(...listPageHeaderAndContent.listData);
        
        const itemsFiltereByMonthAndYear = listToBeFiltered.filter(item => { 
            const date = new Date(item.date); 
            return (date.getMonth() + 1) === selectedMonth 
                && date.getFullYear() === selectedYear
                && frequencyFilterSelected.includes(item.frequency);
        });
        
        const formattedData = itemsFiltereByMonthAndYear.map(item => {
            return {
                id: uuid(),
                description: item.description,
                formattedAmount: formatToBrazilianReal(Number(item.amount)),
                frequency: item.frequency, 
                formattedDate: formatToBrazilianDateFormat(item.date), 
                tagColor: item.frequency === 'recorrente' ? 
                '#4E41F0' : '#E44C4E',
            }
        }) 

        setData(formattedData);
    
    }, [listPageHeaderAndContent.listData, selectedMonth, selectedYear, frequencyFilterSelected]);

    return (
        <Container>
            <ContentHeader 
                title={listPageHeaderAndContent.title} 
                lineColor={listPageHeaderAndContent.lineColor}
            >
            <SelectInput 
                options={months} 
                defaultValue={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
            />
            <SelectInput 
                options={years} 
                defaultValue={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
            />
            </ContentHeader>

            <Filters>
                <button 
                    type="button" 
                    className={
                        `tag-filter tag-filter-recurrent ${
                            frequencyFilterSelected.includes('recorrente') 
                            && 'tag-active'
                        }`
                    }
                    onClick={() => handleFrequencyClick('recorrente')}
                >Recorrentes</button>
                <button 
                    type="button" 
                    className={
                        `tag-filter tag-filter-eventual ${
                            frequencyFilterSelected.includes('eventual') 
                            && 'tag-active'
                        }`
                    }
                    onClick={() => handleFrequencyClick('eventual')}
                >Eventuais</button>
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
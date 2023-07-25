// O código comentado abaixo é apenas outra alternativa válida de implementação 
// import React from 'react'; 

// const Dashboard: React.FC = () => {
//     return (
//         <h1>Dashboard</h1>
//     );
// } 

// Nota: Usando children com React.FC (exemplo)
// const Dashboard: React.FC = ({ children }) => {
//     return (
//         { children }
//     );
// } 

// export default Dashboard; 


// React Hooks
import { useMemo, useState } from "react";

// My components 
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput"; 
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChart";
import HistoryBox from "../../components/HistoryBox";

// Dashboard's style 
import { Container, Content } from "./styles" 

// Icons/Images from src/assets folder 
import happyEmoji from '../../assets/happy.svg';
import sadEmoji from '../../assets/sad.svg'
import grinningEmoji from '../../assets/grinning2.png';

// Data
import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses';
import listOfMonths from '../../repositories/months';
import uuid from "react-uuid";

export default function Dashboard() {

    // Estados dos filtros de mês e ano 
    // Acrescentamos 1 ao mês obtido porque janeiro tem id = 0
    const [selectedMonth, setSelectedMonth] = 
        useState<number>(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = 
        useState<number>(new Date().getFullYear());

        
    
    //   Essa implementação de years nos permite adicionar às opções de filtro 
    // apenas os anos dos registros obtidos do arquivo hardcoded na pasta  
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        //   Agora, no dashboard, precisamos obter tanto o balanço de entradas 
        // (incomes) quanto de saídas (outgoes)
        [...expenses, ...gains].forEach(item => {
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

    }, []);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index+1,
                label: month
            };
        });
    }, []); 


    const totalOutgoes = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item  => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // jan = 0 in js

            if(month === selectedMonth && year === selectedYear) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error(
                        'Invalid amount! Amount must be a number.'
                    );
                };
            }
        });
        return total;
    }, [selectedMonth, selectedYear]);


    const totalIncomes = useMemo(() => {
        let total: number = 0;

        gains.forEach(item  => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // jan = 0 in js

            if(month === selectedMonth && year === selectedYear) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error(
                        'Invalid amount! Amount must be a number.'
                    );
                };
            }
        });
        return total;
    }, [selectedMonth, selectedYear]);

    const totalBalance = useMemo(() => {
        return totalIncomes - totalOutgoes;
    }, [totalIncomes, totalOutgoes]);

    
    const incomesAndOutgoesRatio = useMemo(() => {
        const total = totalIncomes + totalOutgoes; 

        const incomesPerCent = (totalIncomes / total) * 100;
        const outgoesPerCent = (totalOutgoes / total) * 100;

        const data = [
            {
                name: "Entradas",
                value: totalIncomes,
                percent: Number(incomesPerCent.toFixed(1)), // apenas 1 casa decimal 
                color: '#F7931B'
            },
            {
                name: "Saídas",
                value: totalOutgoes,
                percent: Number(outgoesPerCent.toFixed(1)), // apenas 1 casa decimal 
                color: '#E44C4E'
            }
        ]; 
        return data;
    }, [totalIncomes, totalOutgoes]);

    
    const message = useMemo(() => {
        if(totalBalance < 0) {
            return {
                key: uuid(),
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Tente cortar gastos menos necessários.",
                icon: sadEmoji
            };
        } else if(totalBalance == 0) {
            return {
                key: uuid(),
                title: "Ufa!",
                description: "Neste mês você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. Tente manter um saldo positivo.",
                icon: grinningEmoji
            };
        } else {
            return {
                key: uuid(),
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyEmoji
            };
        }
    }, [totalBalance]); 

    const historyData = useMemo(() => {

        //   O retorno das próximas linhas será de um array de objetos que serão 
        // usados para a montagem do gráfico de histórico de saldos 
        return listOfMonths.map((_, month) => {
            
            //   amountEntry, a cada iteração do laço map, recebe a soma de 
            // todas as entradas de um único mês 
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === selectedYear){
                    try{
                        amountEntry += Number(gain.amount);
                    }catch{
                        throw new Error(
                            'Amount is invalid. It must be a number.')
                    }
                }
            });

            //   amountOutput, a cada iteração do laço map, recebe a soma de 
            // todas as saídas de um único mês
            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === selectedYear){
                    try{
                        amountOutput += Number(expense.amount);
                    }catch{
                        throw new Error('Amount is invalid. It must be a number.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substring(0, 3), 
                amountEntry, 
                amountOutput
            }

        })
        //   A aplicação do método filter no array resultante do map é apenas 
        // para fins de limpeza dos dados, impedindo que o gráfico tente 
        // trabalhar com dados do futuro (sanity check) já que o array 
        // listOfMonths contém todos os meses de um ano
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            
            return(
                selectedYear <= currentYear 
                && item.monthNumber <= currentMonth
            );
        });
    },[selectedYear]);

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


    
    return (
        <Container>
            <ContentHeader title="Dashboard"lineColor="#F7931B">
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
            <Content>
                <WalletBox 
                    title= 'Saldo'
                    amount={totalBalance}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'dollar' 
                    boxColor= '#4E41F0'
                />
                
                <WalletBox 
                    title= 'Entradas'
                    amount={totalIncomes}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'arrowUp' 
                    boxColor= '#F7931B'
                />
                
                <WalletBox 
                    title= 'Saídas'
                    amount={totalOutgoes}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'arrowDown' 
                    boxColor= '#E44C4E'
                />

                <MessageBox 
                    key={message.key}
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
                
                <PieChartBox data={incomesAndOutgoesRatio}/> 

                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

            </Content>
        </Container>
    )
}
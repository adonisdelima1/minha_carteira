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

// Dashboard's style 
import { Container, Content } from "./styles" 

// Data
import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses';
import listOfMonths from '../../repositories/months';

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
    //     catch(error) {
    //         throw new Error('Invalid value for year selected.');
    //     }
    // }
    
    // const handleSelectedMonth = (month: string) => {
    //     try {
    //         const parsedMonth = Number(month);
    //         setSelectedMonth(parsedMonth);
    //     } 
    //     catch(error) {
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
                    amount={150.00}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'dollar' 
                    boxColor= '#4E41F0'
                />
                
                <WalletBox 
                    title= 'Entradas'
                    amount={5000.00}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'arrowUp' 
                    boxColor= '#F7931B'
                />
                
                <WalletBox 
                    title= 'Saídas'
                    amount={4850.00}
                    footerLabel= 'Atualizado com base nas entradas e saídas'
                    icon= 'arrowDown' 
                    boxColor= '#E44C4E'
                />

            </Content>
        </Container>
    )
}
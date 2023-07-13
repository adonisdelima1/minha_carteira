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

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles" 

export default function Dashboard() {
    


    const options = [
        {value: "Adonis",label: "Adonis"},
        {value: "Nayara",label: "Nayara"},
        {value: "Brisa", label: "Brisa"},
    ]
    
    return (
        <Container>
            <ContentHeader
                title="Dashboard"
                lineColor="#F7931B"
            >
                <SelectInput 
                    options={options}
                    onChange={() => {}}
                />
            </ContentHeader>
        </Container>
    )
}
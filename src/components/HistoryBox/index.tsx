// HistoryBoxs styled components 
import { 
    Container,
    ChartContainer,
    Header,
    LegendContainer,
    CustomLegend
 } from "./styles";

// ReCharts components 
import {
    ResponsiveContainer, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis,
    CartesianGrid, 
    Tooltip,
    Legend
} from 'recharts';

interface IHistoryBoxProps{
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number,
    }[],
    lineColorAmountEntry: string, 
    lineColorAmountOutput: string
}

export default function HistoryBox(props: IHistoryBoxProps) {
    return (
        <Container>
            
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <CustomLegend color={props.lineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </CustomLegend>
                    <CustomLegend color={props.lineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </CustomLegend>
                </LegendContainer>
            </Header>
            
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={props.data} margin={{ top: 5, right:20, bottom:5, left: 20 }}>
                        <CartesianGrid strokeDasharray='3 3' stroke="#cecece" />
                        <XAxis dataKey='month' stroke="#cecece" /> 
                        <YAxis />
                        <Tooltip />
                        {/* Abaixo está a tag de legenda para o gráfico que já vem 
                        junto com o pacote de recharts, mas o instrutor criou uma 
                        legenda manualmente||   */}
                        {/* <Legend />  */}
                        <Line 
                            type="monotone"
                            dataKey="amountEntry"
                            name="Entradas" 
                            stroke={props.lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5}}
                            activeDot={{ r: 8}}
                        />
                        <Line 
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas" 
                            stroke={props.lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5}}
                            activeDot={{ r: 8}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}
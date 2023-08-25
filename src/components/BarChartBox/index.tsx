// Components from Recharts 
import {
    ResponsiveContainer, 
    BarChart, 
    Bar, 
    Cell, 
    Tooltip
} from 'recharts';


// My custom styled components 
import { 
    Container,
    LeftSide, 
    RightSide,
    LegendContainer,
    Legend
} from "./styles"; 
import currencyFormatter from '../../utils/currencyFormatter';


interface IBarChartBoxProps {
    title: string, 
    data: {
        name: string, 
        amount: number,
        percent: number, 
        color: string
    }[]
}


export default function BarChartBox(props: IBarChartBoxProps) {
    return (
        <Container>
            <LeftSide>
                <h2>{props.title}</h2>
                <LegendContainer>
                    {
                        props.data.map((item) => (
                            <Legend color={item.color}>
                                <div>{item.percent}%</div>
                                <span>{item.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </LeftSide> 
            <RightSide>
                <ResponsiveContainer>
                    <BarChart data={props.data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                props.data.map((item) => (
                                    <Cell 
                                        key={item.name}
                                        cursor="pointer"
                                        fill={item.color}
                                    />
                                ))
                            }
                        </Bar>

                        {/*   Tooltip mostra descrição quando passamos o mouse 
                        em cima da cell */}
                        <Tooltip 
                            formatter={(value) => currencyFormatter(Number(value))}
                            cursor={{fill: 'none'}} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </RightSide>
        </Container>
    );
}
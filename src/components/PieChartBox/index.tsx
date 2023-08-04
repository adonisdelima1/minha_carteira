// Recharts imports 
import {
    PieChart, 
    Pie, 
    Cell, 
    ResponsiveContainer

} from 'recharts';

// PieChart's styled components 
import { 
    Container,
    LeftSide,
    SubtitleContainer, 
    Subtitle,
    RightSide,


 } from "./styles";

interface IPieChartBoxProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];
}

export default function PieChartBox(props: IPieChartBoxProps) {
    return (
        <Container>
            <LeftSide>
                <h2>Relação</h2>
                <SubtitleContainer>
                    {
                        props.data.map((item) => (
                            <Subtitle color={item.color}>
                                <div>{item.percent}%</div>
                                <span>{item.name}</span>
                            </Subtitle>
                        ))
                    }
                </SubtitleContainer>
            </LeftSide>
            <RightSide>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            data={props.data}
                            labelLine={false}
                            dataKey='percent'
                        >
                            {
                                props.data.map((item) => (
                                    <Cell key={item.name} fill={item.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </RightSide>
        </Container>
    );
}
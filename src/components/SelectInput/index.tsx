import { Container } from "./styles";

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    } [], 
    onChange(event?: any) : void, 
    defaultValue?: string | number,
}

export default function SelectInput(props: ISelectInputProps){
    return(
        <Container>
            <select 
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            >
                {
                    props.options.map(option => (
                        <option 
                            key = {option.value}
                            value={option.value}>
                                {option.label}
                        </option>
                    ))
                }
            </select>
        </Container>
    );
}
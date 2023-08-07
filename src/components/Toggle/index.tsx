import {
    Container, 
    ToggleLabbel,
    ToggleSelector
} from './styles';


interface IToggleProps {
    leftLabel: string,
    rightLabel: string,
    checked: boolean, 
    onChange(): void
}

export default function Toggle(props: IToggleProps) {
    return(
        <Container>
            <ToggleLabbel>{props.leftLabel}</ToggleLabbel>
            <ToggleSelector 
                checked={props.checked}
                onChange={() => {props.onChange()}}
                uncheckedIcon = {false} 
                checkedIcon = {false}
            />
            <ToggleLabbel>{props.rightLabel}</ToggleLabbel>
        </Container>
    );
}
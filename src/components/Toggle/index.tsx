import {
    Container, 
    ToggleLabbel,
    ToggleSelector
} from './styles';

export default function Toggle() {
    return(
        <Container>
            <ToggleLabbel>Light</ToggleLabbel>
            <ToggleSelector 
                checked
                onChange={() => {}}
                uncheckedIcon = {false} 
                checkedIcon = {false}
            />
            <ToggleLabbel>Dark</ToggleLabbel>
        </Container>
    );
}
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";


export default function List() {
    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7931B">
                <SelectInput 
                    options={[]} 
                    onChange={() => {}}
                />
            </ContentHeader>
        </Container>
    );
}
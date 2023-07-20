// React packages/components 
import CountUp from 'react-countup';

// WalletBox's styles 
import { Container } from './styles'; 

// Icons
import dollarIcon from '../../assets/dollar.svg';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

interface IWalletBox {
    title: string,
    amount: number,
    footerLabel: string,
    icon: 'dollar' | 'arrowUp' | 'arrowDown', 
    boxColor: string 
}

export default function WalletBox(props: IWalletBox) {
    
    const iconSelected = () => {
        switch (props.icon) {
            case 'dollar': return dollarIcon; 
            case 'arrowUp': return arrowUpIcon; 
            case 'arrowDown': return arrowDownIcon;
            default: return null; 
        }
    }

    return(
        <Container color={props.boxColor}>
            <span>{props.title}</span>
            <h1>
                <CountUp 
                    end={props.amount}
                    prefix='R$'
                    separator='.' // Usando ponto para separar grandezas (1.000)
                    decimal=',' // Usando vírgula para separar as casa decimais 
                    decimals={2} // Definindo número de casas decimais 
                />
            </h1>
            <small>{props.footerLabel}</small>
            <img src={iconSelected() || dollarIcon} alt={props.title} />
        </Container>
    );
}


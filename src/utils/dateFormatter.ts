export default function formatToBrazilianDateFormat(currentDate: string) : string {
    const formattedDate = new Date(currentDate); 
    
    const day = formattedDate.getDate() > 9 
    ? formattedDate.getDate() : `0${formattedDate.getDate()}`;

    // Acrescentando um no mês porque aqui janeiro é 0 (zero)
    const month = formattedDate.getMonth() + 1 > 9 
    ? formattedDate.getMonth() + 1 : `0${formattedDate.getMonth() + 1}`; 
    
    const year = formattedDate.getFullYear();

    return `${day}/${month}/${year}`

}
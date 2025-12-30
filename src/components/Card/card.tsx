import { CardContainer } from "./styles";

type ProductProps = {
    name: string;
    price: number;
}

const Card: React.FC<{product: ProductProps}> = ({product}) => {
    const getPriceStatus = (price: number) => {
        if (price < 10) return "good price";
        else if (price >= 10 && price <= 20) return "average price";
        return "high price";
    }
    return (
        <CardContainer>
            <h2>{product.name}</h2>
            <p>R$ {(product.price).toFixed(2)}</p>
            <article>{getPriceStatus(product.price)}</article>
        </CardContainer>
    )
}
export default Card;
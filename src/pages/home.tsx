import { useState } from "react";
import { Card, SearchBar } from "../components";
import { ContentArea, HeaderArea, List, Wrapper } from "./styles";
import logo from "../assets/logo.png";
import productsJson from "../products_data.json";


const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const products = productsJson.products;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(search.toLowerCase()),
  );

  return (
    <Wrapper>
      <HeaderArea>
        <img src={logo} alt="Logo" width={200} />
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </HeaderArea>

      <ContentArea>
        <List>
          {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </List>
      </ContentArea>
    </Wrapper>
  );
};

export default Home;

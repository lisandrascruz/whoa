import { useState } from "react";
import { SearchBar } from "../components";
import { ContentArea, HeaderArea, Wrapper } from "./styles";
import logo from "../assets/logo.png";

const products = ["Arroz", "Feijão", "Macarrão"];

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().startsWith(search.toLowerCase()),
  );

  return (
    <Wrapper>
      <HeaderArea>
        <img src={logo} alt="Logo" width={200} />
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </HeaderArea>

      <ContentArea>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </ContentArea>
    </Wrapper>
  );
};

export default Home;

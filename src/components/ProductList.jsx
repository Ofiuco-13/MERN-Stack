import styled from "styled-components";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Products from "./Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Fragancias
            </Option>
            <Option>Por marca</Option>
            <Option>Masculinas</Option>
            <Option>Femeninas</Option>
            <Option>Cofres</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Sort
            </Option>
            <Option>Dermocosmetics</Option>
            <Option>Treatment</Option>
            <Option>Make Up</Option>
            <Option>Personal care</Option>
            <Option>Baby care</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;

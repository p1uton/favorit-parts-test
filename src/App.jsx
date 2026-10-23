import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Analogues from "./components/Analogues";
import Brands from "./components/Brands";
import PartNumber from "./components/PartNumber";
import { setBrand, setPartNumber } from "./store/slices/searchSlice";

function App() {
  const dispatch = useDispatch();
  const { partNumber, brand } = useSelector((state) => state.search);

  const handleChangePartNumber = (value) => {
    dispatch(setPartNumber(value));
    dispatch(setBrand(""));
  };

  const handleChangeBrand = (value) => {
    dispatch(setBrand(value));
  };

  return (
    <Container className="p-4">
      <h1>Поиск автозапчастей и аналогов</h1>
      <Row className="pb-4">
        <Col>
          <PartNumber onChange={handleChangePartNumber} />
        </Col>
      </Row>
      {partNumber && (
        <Row>
          <Col xs={4}>
            <Brands
              partNumber={partNumber}
              brand={brand}
              onChange={handleChangeBrand}
            />
          </Col>
          <Col>
            {brand && <Analogues partNumber={partNumber} brand={brand} />}
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;

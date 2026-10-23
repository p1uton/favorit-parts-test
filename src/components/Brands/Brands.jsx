import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import { useGetPartPriceQuery } from "../../api/favoritPartsApi";

export const Brands = ({ partNumber, brand, onChange }) => {
  const { brands, isLoading, isFetching, isError } = useGetPartPriceQuery(
    { partNumber },
    {
      selectFromResult: (result) => {
        const goods = Array.isArray(result?.data?.goods)
          ? result.data.goods
          : [];
        return {
          brands: goods.map((item) => item.brand),
          isLoading: result.isLoading,
          isFetching: result.isFetching,
          isError: result.isError,
        };
      },
    },
  );

  const handleClick = (value) => {
    onChange(value);
  };

  if (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </Spinner>
    );
  }

  if (isError) {
    return <h3>Ошибка при обращении к серверу</h3>;
  }

  if (brands.length === 0 || brands[0] === "") {
    return <h3>Производители не найдены</h3>;
  }

  return (
    <>
      <h3>Производители</h3>
      <ListGroup>
        {brands.length > 0 &&
          brands[0] !== "" &&
          brands.map((item) => (
            <ListGroup.Item
              key={item}
              action
              active={item === brand}
              onClick={() => handleClick(item)}
            >
              {item}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

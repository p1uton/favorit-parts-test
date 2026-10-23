import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useGetPartPriceQuery } from "../../api/favoritPartsApi";
import { formatterRub } from "../../utils";

export const Analogues = ({ partNumber, brand }) => {
  const { analogues, isLoading, isFetching, isError } = useGetPartPriceQuery(
    { partNumber, brand, analogues: "on" },
    {
      selectFromResult: (result) => {
        const analogues = Array.isArray(result?.data?.goods?.[0]?.analogues)
          ? result.data.goods[0].analogues
          : [];
        return {
          analogues,
          isLoading: result.isLoading,
          isFetching: result.isFetching,
          isError: result.isError,
        };
      },
    },
  );

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

  if (analogues.length === 0) {
    return <h3>Аналоги и предложения не найдены</h3>;
  }

  return (
    <>
      <h3>Аналоги и предложения</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Название</th>
            <th>Производитель</th>
            <th>Стоимость</th>
            <th>Остаток</th>
          </tr>
        </thead>
        <tbody>
          {analogues.map((analogue) => (
            <tr key={analogue.goodsID}>
              <td>{analogue.name}</td>
              <td>{analogue.brand}</td>
              <td>{formatterRub.format(analogue.price)}</td>
              <td>{analogue.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

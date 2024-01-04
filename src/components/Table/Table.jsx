import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import css from "./Table.module.css";
import { getCategory } from "../../services/api";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // створюємо асинхронну функцію
    async function getAllCategory() {
      setIsLoading(true);
      try {
        const response = await getCategory();
        setData(response.data);
      } catch {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }
    // викликаємо функцію
    getAllCategory();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className={css.table}>
          <li>
            {data.map((element) => (
              <div key={element._id} className={css.row}>
                <Row element={element} />
              </div>
            ))}
          </li>
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Table;

/* <table>
          <thead>
            <tr className={css.tableHead}>
              <th className={css.headCell}>Code</th>
              <th className={css.headCell}>DescriptionUa</th>
              <th className={css.headCell}>Price</th>
              <th className={css.headCell}>Unit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr key={element._id} className={css.row}>
                <Row element={element} />
              </tr>
            ))}
          </tbody>
        </table> */

import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import css from "./Table.module.css";
import { getAll } from "../../services/api";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // створюємо асинхронну функцію
    async function getAllElements() {
      setIsLoading(true);
      try {
        const response = await getAll();
        setData(response.data);
      } catch {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }
    // викликаємо функцію
    getAllElements();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <table>
          <thead>
            <tr className={css.tableHead}>
              <th className={css.headCell}>Description</th>
              <th className={css.headCell}>Code</th>
              <th className={css.headCell}>Price</th>
              <th className={css.headCell}>Unitcode</th>
              <th className={css.headCell}>Level</th>
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
        </table>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Table;

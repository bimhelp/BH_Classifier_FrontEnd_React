import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import css from "./Table.module.css";
import { getCategory, getSubCategory } from "../../services/api";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

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

  const selectCategory = async (id, code) => {
    console.log("id: ", id);
    const cpvCode = code.slice(0, 2);
    // console.log("cpvCode: ", cpvCode);
    setSelectedId(id);
    setIsLoading(true);
    try {
      const response = await getSubCategory(cpvCode);
      setSubCategory(response.data);
    } catch (error) {
      setError("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.table}>
          <li>
            {data.map((element) => (
              <div key={element._id} className={css.row}>
                <Row
                  element={element}
                  selectCategory={() =>
                    selectCategory(element._id, element.Code)
                  }
                  isSelected={element._id === selectedId}
                  subCategory={subCategory}
                />
              </div>
            ))}
          </li>
        </ul>
      )}
      {/* {subCategory.length > 0 && (
        <ul>
          <li>
            {subCategory.map((element) => (
              <div key={element._id} className={css.row}>
                <Row element={element} selectCategory={selectCategory} />
              </div>
            ))}
          </li>
        </ul>
      )} */}
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

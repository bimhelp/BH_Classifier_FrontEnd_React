import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import { searchByDescription, searchMaterials } from "../../services/api";
import {
  checkIsString,
  parseNumber,
  onLyCategory,
  onLyMaterial,
} from "../../services";
import { MainTableWrapper } from "./TablePage.styled";

const TablePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Викликається під час відправлення форми

  const backToTable = () => {
    setSearchResult([]);
  };

  // Розділення на категорії і матеріали
  useEffect(() => {
    // console.log("category", onLyCategory(searchResult));
    setCategory(onLyCategory(searchResult));
    // console.log("materials", onLyMaterial(searchResult));
    setMaterials(onLyMaterial(searchResult));
  }, [searchResult]);

  // Пошук елементів
  const submit = (searchValue) => {
    // console.log("searchValue: ", searchValue);

    const isString = checkIsString(searchValue);
    const codeNumber = parseNumber(searchValue);

    if (isString) {
      setQuery(searchValue);

      // console.log(`search ${searchValue} by description`);
      async function search(searchValue) {
        setIsLoading(true);
        try {
          const response = await searchByDescription(searchValue);
          if (response) {
            // console.log(response.data);
            setSearchResult(response.data);
          }
        } catch {
          setError("error");
        } finally {
          setIsLoading(false);
        }
      }
      search(searchValue);
    } else {
      async function search(codeNumber) {
        // console.log(`search ${codeNumber} by code`);
        setIsLoading(true);
        try {
          const response = await searchMaterials(codeNumber);
          // console.log(response.data);
          if (response) {
            setSearchResult(response.data);
          }
        } catch {
          setError("error");
        } finally {
          setIsLoading(false);
        }
      }
      search(codeNumber);
    }
  };

  return (
    <>
      <Section>
        <Search
          submit={submit}
          isLoading={isLoading}
          error={error}
          back={backToTable}
        />
      </Section>
      <Section>
        <MainTableWrapper>
          <Table category={category} materials={materials} query={query} />
        </MainTableWrapper>
      </Section>
      {error && <p>{error.code}</p>}
    </>
  );
};

export default TablePage;

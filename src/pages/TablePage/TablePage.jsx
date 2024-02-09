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
import { toast } from "react-toastify";
import SearchResults from "../../components/SearchResults/SearchResults";

const TablePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Виклика8ється під час відправлення форми

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
        setSearchResult([]);
        try {
          const response = await searchByDescription(searchValue);
          if (response) {
            // console.log(response.data);
            setSearchResult(response.data);
          }
        } catch {
          toast.error(`Не вдалось знайти ${searchValue}`, { autoClose: 3000 });
        } finally {
          setIsLoading(false);
        }
      }
      search(searchValue);
    } else {
      async function search(codeNumber) {
        // console.log(`search ${codeNumber} by code`);
        setIsLoading(true);
        setSearchResult([]);
        try {
          const response = await searchMaterials(codeNumber);
          // console.log(response.data);
          if (response) {
            setSearchResult(response.data);
          }
        } catch {
          toast.error(`Не вдалось знайти ${searchValue}`, { autoClose: 3000 });
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
          back={backToTable}
          isSubmiting={isLoading}
        />
      </Section>
      <Section>
        <MainTableWrapper>
          {category.length > 0 || materials.length > 0 ? (
            <SearchResults
              category={category}
              materials={materials}
              query={query}
            />
          ) : (
            <Table />
          )}
        </MainTableWrapper>
      </Section>
    </>
  );
};

export default TablePage;

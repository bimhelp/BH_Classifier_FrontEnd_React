import React, { useState } from "react";
import Table from "../../components/Table/Table";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import { searchByDescription, searchMaterials } from "../../services/api";
import { checkIsString, parseNumber } from "../../services";

const TablePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Викликається під час відправлення форми

  const backToTable = () => {
    setSearchResult([]);
  };

  const submit = (searchValue) => {
    const isString = checkIsString(searchValue);
    const codeNumber = parseNumber(searchValue);

    if (isString) {
      console.log("isString: ", isString);
      console.log(`search ${searchValue} by description`);
      async function search(searchValue) {
        setIsLoading(true);
        try {
          const response = await searchByDescription(searchValue);
          // console.log(response.data);
          setSearchResult(response.data);
        } catch {
          setError("error");
        } finally {
          setIsLoading(false);
        }
      }
      search(searchValue);
    } else {
      async function search(codeNumber) {
        console.log(`search ${codeNumber} by code`);
        setIsLoading(true);
        try {
          const response = await searchMaterials(codeNumber);
          console.log(response.data);
          setSearchResult(response.data);
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
        <Table result={searchResult} />
      </Section>
      {error && <p>{error.code}</p>}
    </>
  );
};

export default TablePage;

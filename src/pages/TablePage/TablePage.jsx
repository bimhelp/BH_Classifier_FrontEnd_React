import React, { useState } from "react";
import Table from "../../components/Table/Table";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import { searchByDescription } from "../../services/api";

const TablePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Викликається під час відправлення форми

  const backToTable = () => {
    setSearchResult([]);
  };

  const submit = (searchValue) => {
    // console.log(searchValue);

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
    </>
  );
};

export default TablePage;

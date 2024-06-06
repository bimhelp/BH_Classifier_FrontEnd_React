import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import UnitSelect from "../../components/UnitSelect/UnitSelect";
import { createOptionsFromUnits } from "../../services";
import { checkIsString, parseNumber } from "../../services";
import { MainTableWrapper, SearchWrapper } from "./MaterialPage.styled";
import { toast } from "react-toastify";
import {
  searchMaterialByDescription,
  searchMaterialByCode,
} from "../../services/api";

const MaterialPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [unit, setUnit] = useState(null);
  const [options, setOptions] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVisibleMaterials = () => {
      if (unit) {
        return searchResult.filter((item) => item.Unit === unit);
      }
      return searchResult;
    };
    setFilteredResults(getVisibleMaterials);
  }, [options, searchResult, unit]);

  // Викликається під час відправлення форми
  const backToTable = () => {
    setSearchResult([]);
    setFilteredResults([]);
    setUnit(null);
  };

  // вибір одиниці виміру
  const selectUnit = (option) => {
    setUnit(option.value);
  };

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
          const response = await searchMaterialByDescription(searchValue);
          if (response) {
            // console.log(response.data);
            setSearchResult(response.data);

            // зробити опції для фільтру по unit
            setOptions(createOptionsFromUnits(response.data));
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
          const response = await searchMaterialByCode(codeNumber);
          // console.log(response.data);
          if (response) {
            setSearchResult(response.data);
            setOptions(createOptionsFromUnits(response.data));
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
        <SearchWrapper>
          <Search
            submit={submit}
            isLoading={isLoading}
            back={backToTable}
            isSubmiting={isLoading}
          />
          <div style={{ minWidth: "20%" }}>
            {searchResult?.length > 0 && (
              <UnitSelect onSelect={selectUnit} options={options} />
            )}
          </div>
        </SearchWrapper>
      </Section>
      <Section>
        <MainTableWrapper>
          {searchResult?.length > 0 ? (
            <SearchResults
              results={filteredResults}
              query={query}
              variant="material"
              submit={submit}
            />
          ) : (
            <MaterialTable submit={submit} />
          )}
        </MainTableWrapper>
      </Section>
    </>
  );
};

export default MaterialPage;

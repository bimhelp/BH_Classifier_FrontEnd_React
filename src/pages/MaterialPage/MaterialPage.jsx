import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import UnitSelect from "../../components/UnitSelect/UnitSelect";
import { createOptionsFromUnits } from "../../services";
import { checkIsString } from "../../services";
import { MainTableWrapper, SearchWrapper } from "./MaterialPage.styled";
import { toast } from "react-toastify";
import {
  searchMaterialByDescription,
  searchMaterialByCode,
  getMaterialById,
} from "../../services/api";
import MaterialList from "../../components/MaterialList/MaterialList";

const MaterialPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [unit, setUnit] = useState(null);
  const [options, setOptions] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [material, setMaterial] = useState([]);
  const [status, setStatus] = useState("materials"); // визначає що буде показано, матеріали чи результат пошуку по дереву

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
    setStatus("materials");
  };

  // вибір одиниці виміру
  const selectUnit = (option) => {
    setUnit(option.value);
  };

  // Пошук елементів
  const submit = (searchValue) => {
    setStatus("search");
    const isString = checkIsString(searchValue);

    if (isString) {
      setQuery(searchValue);

      // console.log(`search ${searchValue} by description`);
      async function search(searchValue) {
        setIsLoading(true);
        setSearchResult([]);
        try {
          const response = await searchMaterialByDescription(searchValue);
          if (response) {
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
      async function search(searchValue) {
        // console.log(`search ${codeNumber} by code`);
        setIsLoading(true);
        setSearchResult([]);
        try {
          const response = await searchMaterialByCode(searchValue);
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
      search(searchValue);
    }
  };

  // Отримати по id
  const materialById = (id) => {
    setStatus("oneMaterial");
    const controller = new AbortController();
    async function getMaterial(id) {
      try {
        //  setIsLoading(true);
        const response = await getMaterialById(id, controller.signal);

        setMaterial([response.data]);
      } catch {
        toast.error("Не вдалось отримати матеріал");
      } finally {
        //  setIsLoading(false);
      }
    }
    getMaterial(id);
    return () => {
      controller.abort();
    };
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
          {status === "materials" && <MaterialTable byId={materialById} />}

          {status === "oneMaterial" && (
            <MaterialList items={material} byId={materialById} />
          )}

          {status === "search" && (
            <SearchResults
              results={filteredResults}
              query={query}
              variant="material"
              byId={materialById}
            />
          )}
        </MainTableWrapper>
      </Section>
    </>
  );
};

export default MaterialPage;

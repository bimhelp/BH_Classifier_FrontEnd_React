import React, { useState } from "react";
import ServiceTable from "../../components/ServiceTable/ServiceTable";
import ServiceList from "../../components/ServiceList/ServiceList";
import Section from "../../components/Section/Section";
import Search from "../../components/Search/Search";
import {
  searchServiceByDescription,
  searchServiceByCode,
  getServiceById,
} from "../../services/api";
import { checkIsString } from "../../services";
import { MainTableWrapper } from "./ServicePage.styled";
import { toast } from "react-toastify";
import SearchResults from "../../components/SearchResults/SearchResults";

const ServicePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("services"); // визначає що буде показано, матеріали чи результат пошуку по дереву
  const [service, setService] = useState([]);

  // Виклика8ється під час відправлення форми
  const backToTable = () => {
    setSearchResult([]);
    setStatus("services");
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
          const response = await searchServiceByDescription(searchValue);
          if (response) {
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
      async function search(searchValue) {
        // console.log(`search ${codeNumber} by code`);
        setIsLoading(true);
        setSearchResult([]);
        try {
          const response = await searchServiceByCode(searchValue);
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
      search(searchValue);
    }
  };

  // Отримати по id
  const serviceById = (id) => {
    console.log("service id: ", id);

    setStatus("oneService");
    const controller = new AbortController();
    async function getService(id) {
      try {
        //  setIsLoading(true);
        const response = await getServiceById(id, controller.signal);
        // console.log("response: ", response.data);

        setService([response.data]);
      } catch {
        toast.error("Не вдалось отримати сервіс");
      } finally {
        //  setIsLoading(false);
      }
    }
    getService(id);
    return () => {
      controller.abort();
    };
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
          {status === "services" && <ServiceTable byId={serviceById} />}

          {status === "oneService" && (
            <ServiceList items={service} byId={serviceById} />
          )}

          {status === "search" && (
            <SearchResults
              results={searchResult}
              query={query}
              variant="service"
              byId={serviceById}
            />
          )}
        </MainTableWrapper>
      </Section>
      {/* <Section>
        <MainTableWrapper>
          {searchResult.length > 0 ? (
            <SearchResults
              results={searchResult}
              query={query}
              variant="service"
            />
          ) : (
            <ServiceTable />
          )}
        </MainTableWrapper>
      </Section> */}
    </>
  );
};

export default ServicePage;

import React from "react";
// Навігація по сайту
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Компоненти
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Layout, Content } from "./SharedLayout.styled";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn";

const SharedLayout = ({ user }) => {
  return (
    <Layout>
      <Header />
      <Content id="content">
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
        <ScrollToTopBtn />
      </Content>
      <Footer />
    </Layout>
  );
};

export default SharedLayout;

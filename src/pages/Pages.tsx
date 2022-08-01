import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { HomePage } from "./HomePage";

import { ROUTES } from "./ROUTES.d";

export const Pages: FC = (props) => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

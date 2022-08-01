import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Providers } from "src/data/Providers";
import { MainLayout } from "src/components/MainLayout";
import { HomePage } from "./HomePage";

import { ROUTES } from "./ROUTES.d";

export const Pages: FC = (props) => {
  return (
    <Providers>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </Providers>
  );
};

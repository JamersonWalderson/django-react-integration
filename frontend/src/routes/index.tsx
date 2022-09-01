import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import NotFoundPage from '../pages/404';
import Home from '../pages/home';

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
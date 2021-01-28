import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Loading from "./app/layouts/Loading";
import theme from "./app/theme";
import "./styles/index.css";

const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./provider/StoreProvider/index.ts";
import QuizBtnProvider from "./provider/QuizProvider/QuizProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizBtnProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </QuizBtnProvider>
    </BrowserRouter>
  </React.StrictMode>
);

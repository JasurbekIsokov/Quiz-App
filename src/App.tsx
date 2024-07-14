import { Suspense } from "react";

import { Loader } from "./components";
import { Header, MainLayout, Footer } from "./layouts";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div id="app">
      <Suspense fallback={<Loader />}>
        <MainLayout
          header={<Header />}
          content={<AppRouter />}
          footer={<Footer />}
        />
      </Suspense>
    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "~/routes";
import DefaultLayout from "~/layouts/defaultLayout";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          } else {
            Layout = DefaultLayout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

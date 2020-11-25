import React, { lazy, Suspense } from "react";
import { FullPageSpinner } from "components/loaders.js";
const ProductGrid = lazy(() => import("./components/grid"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Header />
      <ProductGrid />
    </Suspense>
  );
}

export default App;

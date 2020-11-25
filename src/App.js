import React, { lazy, Suspense } from "react";
import CartControlProvider from "contexts/CartControl";
import { FullPageSpinner } from "components/loaders.js";
const ProductGrid = lazy(() => import("./components/grid"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <CartControlProvider>
        <Header />
        <ProductGrid />
      </CartControlProvider>
    </Suspense>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import ToggleCartProvider from "contexts/ToggleCart";
import { FullPageSpinner } from "components/loaders.js";
import CartProvider from "contexts/Cart/CartContext";
const ProductGrid = lazy(() => import("./components/grid"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <ToggleCartProvider>
        <CartProvider>
          <Header />
          <ProductGrid />
        </CartProvider>
      </ToggleCartProvider>
    </Suspense>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './pages/landingpage/landingpage';
import './App.css';

const queryClient = new QueryClient();

const Item = React.lazy(() => import('./components/items/items'));
const ItemDetails = React.lazy(() => import('./components/itemdetails/ItemDetails'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route
              index
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Item />
                </React.Suspense>
              }
            />
            <Route
              path="item/:id"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ItemDetails />
                </React.Suspense>
              }
            />
            <Route
              path="items/:mealType"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Item />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
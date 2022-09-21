import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DogImages } from "./patterns/presentational-container/DogImagesWithHooks";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/presentational-container" element={<DogImages />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

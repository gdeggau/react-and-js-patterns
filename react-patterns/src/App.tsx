import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DogImagesHOC } from "./patterns/hoc/DogImages";
import { Observe } from "./patterns/observer/Observe";

import { DogImages } from "./patterns/presentational-container/DogImagesWithHooks";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/presentational-container" element={<DogImages />} />
          <Route path="/observe" element={<Observe />} />
          <Route path="/hoc" element={<DogImagesHOC />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

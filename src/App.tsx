import { RouterProvider } from "react-router-dom";
import { Router } from "./Routers/indx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Aos from "aos";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />;
    </QueryClientProvider>
  );
};

export default App;

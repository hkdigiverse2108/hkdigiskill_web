import { RouterProvider } from "react-router-dom";
import { Router } from "./Routers/indx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />;
    </QueryClientProvider>
  );
};

export default App;

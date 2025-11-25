import { RouterProvider } from "react-router-dom";
import { Router } from "./Routers/indx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Aos from "aos";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

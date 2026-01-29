import { RouterProvider } from "react-router-dom";
import { Router } from "./Routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Aos from "aos";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import AuthInitializer from "./Components/Common/AuthInitializer";
import SettingsInitializer from "./Components/Common/SettingsInitializer";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <AuthInitializer />
        <SettingsInitializer />
        <RouterProvider router={Router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

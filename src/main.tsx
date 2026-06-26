import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

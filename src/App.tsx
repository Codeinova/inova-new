import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Novedades from "./pages/Novedades";
import ArticleDetail from "./pages/ArticleDetail";
import AdminNovedades from "./pages/AdminNovedades";
import ArticleForm from "./pages/ArticleForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/novedades/:slug" element={<ArticleDetail />} />
            <Route path="/admin/novedades" element={<AdminNovedades />} />
            <Route path="/admin/novedades/nuevo" element={<ArticleForm />} />
            <Route path="/admin/novedades/editar/:id" element={<ArticleForm />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

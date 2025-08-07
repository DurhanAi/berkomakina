import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Vision from "@/pages/about/Vision";
import Mission from "@/pages/about/Mission";
import QualityPolicy from "@/pages/about/QualityPolicy";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Main sections */}
      <Route path="/products" component={Products} />
      <Route path="/products/:categoryId" component={ProductDetail} />
      <Route path="/about" component={About} />
      
      {/* About sub-sections */}
      <Route path="/about/vision" component={Vision} />
      <Route path="/about/mission" component={Mission} />
      <Route path="/about/quality-policy" component={QualityPolicy} />
      
      {/* Contact page */}
      <Route path="/contact" component={Contact} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
              <Router />
            </div>
            <Footer />
          </div>
          <WhatsAppButton />
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;

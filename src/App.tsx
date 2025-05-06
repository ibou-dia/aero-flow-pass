import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import RegistrationPage from "./pages/RegistrationPage";
import QRCodePage from "./pages/QRCodePage";
import StatusPage from "./pages/StatusPage";
import NotFoundPage from "./pages/NotFound";
import FacialRecognitionPage from "./pages/FacialRecognitionPage";
import FlightInfoPage from "./pages/FlightInfoPage";
import HelpPage from "./pages/HelpPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/registration" element={<RegistrationPage />} />
          <Route path="/dashboard/qrcode" element={<QRCodePage />} />
          <Route path="/dashboard/status" element={<StatusPage />} />
          <Route path="/dashboard/facial-recognition" element={<FacialRecognitionPage />} />
          <Route path="/dashboard/flight-info" element={<FlightInfoPage />} />
          <Route path="/dashboard/help" element={<HelpPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

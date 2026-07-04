import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import MediaPage from "./pages/MediaPage";
import MembershipPage from "./pages/MembershipPage";
import PartnershipPage from "./pages/PartnershipPage";

import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import AdminMembersPage from "./pages/AdminMembersPage";

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div>
      {!isAdmin && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/members" element={<AdminMembersPage />} />
      </Routes>
      {!isAdmin && <Footer />}
      <JoinModal />
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

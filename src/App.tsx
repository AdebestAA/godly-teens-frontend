import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import DonationPage from "./pages/DonationPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
        <JoinModal />
      </div>
    </Router>
  );
}

export default App;

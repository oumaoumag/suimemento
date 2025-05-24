import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventDiscovery from './pages/EventDiscovery';
import BadgeMinting from './pages/BadgeMinting';
import UserProfile from './pages/UserProfile';
import Marketplace from './pages/Marketplace';
import OrganizerPortal from './pages/OrganizerPortal';

function App() {
   return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventDiscovery />} />
          <Route path="/mint" element={<BadgeMinting />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/organizer" element={<OrganizerPortal />} />
        </Routes>
      </Layout>
    </BrowserRouter>     
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Log-signup/Login";
import Signup from "./Pages/Log-signup/Signup";
import Create from "./Pages/User/Create";
import Events from "./Pages/User/Events";
import Home from "./Pages/User/Home";
import Housing from "./Pages/User/Housing";
import Landing from "./Pages/User/Landing";
import Messages from "./Pages/User/Messages";
import Notification from "./Pages/User/Notification";
import People from "./Pages/User/People";
import Profile from "./Pages/User/profile";
import AdminDashboardLayout from './Components/Navbar/Admin-layout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard Routes */}
        <Route element={<AdminDashboardLayout />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/people" element={<People />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/events" element={< Events/>} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/create-post" element={<Create />} />
          <Route path="/profile-settings" element={<Profile />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaBell,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaRegCalendarAlt 
} from "react-icons/fa";

const UserNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 text-slate-800 h-full">
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaUsers />
            People
          </NavLink>
          <NavLink
            to="/housing"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaHome />
            Housing
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaRegCalendarAlt />
            Events
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaEnvelope />
            Messages
          </NavLink>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaBell />
            Notifications
          </NavLink>
          <NavLink
            to="/create-post"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaPlus />
            Create Post
          </NavLink>
          <NavLink
            to="/profile-settings"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaUser />
            Profile & Settings
          </NavLink>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t">
        <nav className="flex justify-around p-2 text-slate-800">
          <button onClick={toggleSidebar} className="flex flex-col items-center gap-1">
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            <span className="text-xs">Menu</span>
          </button>
          
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? "text-blue-500" : ""}`
            }
          >
            <FaEnvelope  size={20}/>
            <span className="text-xs">Messages</span>
          </NavLink>
          <NavLink
            to="/profile-settings"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? "text-blue-500" : ""}`
            }
          >
            <FaUser size={20} />
            <span className="text-xs">Profile</span>
          </NavLink>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
          <div className="fixed inset-y-0 left-0 bg-white w-64 z-50 shadow-lg flex flex-col">
            <div className="flex items-center justify-center h-20 border-b">
              <h1 className="text-2xl font-bold">User Dashboard</h1>
            </div>
            <nav className="flex-1 p-4 space-y-4">
              <NavLink
                to="/home"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Home
              </NavLink>
              <NavLink
                to="/people"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaUsers />
                People
              </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaEnvelope />
            Messages
          </NavLink>
              <NavLink
                to="/housing"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Housing
              </NavLink>
              <NavLink
                to="/events"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Events
              </NavLink>
              <NavLink
                to="/notifications"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaBell />
                Notifications
              </NavLink>
              <NavLink
                to="/create-post"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaPlus />
                Create Post
              </NavLink>
              <NavLink
                to="/profile-settings"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaUser />
                Profile & Settings
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default UserNavbar;

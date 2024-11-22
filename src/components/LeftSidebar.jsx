import { useState } from "react";
import { Home, Globe, Users, Briefcase, Building } from "lucide-react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-60 h-screen bg-white shadow-md">

      {/* Sidebar Container */}
      <div className="flex flex-col space-y-4 py-6 px-4">

        {/* Home */}
        <div
          onClick={() => handleSectionClick("home")}
          className={`flex items-center space-x-3 cursor-pointer ${activeSection === "home" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"} p-2`}
        >
          <div className="">
            <Home className={`${activeSection === "home" ? "text-orange-500" : "text-gray-500"}`} size={20} />
          </div>
          <span className="font-medium">Home</span>
        </div>

        {/* Public Section */}
        <div>
          <h4 className="text-xs text-gray-500 font-bold uppercase mb-2 flex items-center space-x-2">
            <Globe className="text-gray-500" size={16} />
            <span>Public</span>
          </h4>
          <div className="flex flex-col space-y-3 pl-6">
            <div
              onClick={() => handleSectionClick("questions")}
              className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "questions" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
            >
              <span className="text-sm">Questions</span>
            </div>
            <div
              onClick={() => handleSectionClick("tags")}
              className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "tags" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
            >
              <span className="text-sm">Tags</span>
            </div>
            <div
              onClick={() => handleSectionClick("users")}
              className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "users" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
            >
              <span className="text-sm">Users</span>
            </div>
          </div>
        </div>

        {/* Collectives Section */}
        <div>
          <h4 className="text-xs text-gray-500 font-bold uppercase mb-2 flex items-center space-x-2">
            <Briefcase className="text-gray-500" size={16} />
            <span>Collectives</span>
          </h4>
          <div
            onClick={() => handleSectionClick("collectives")}
            className={`flex space-y-3 pl-8 items-center space-x-2 cursor-pointer px-2 py-2 mt-2 ${activeSection === "collectives" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
          >
            <span className="text-sm">Explore Jobs</span>
          </div>
        </div>

        {/* Find Jobs Section */}
        <div>
          <h4 className="text-xs text-gray-500 font-bold uppercase mb-2 flex items-center space-x-2">
            <Building className="text-gray-500" size={16} />
            <span>Find Jobs</span>
          </h4>
          <div className="flex flex-col space-y-3 pl-6">
            <div
              onClick={() => handleSectionClick("jobs")}
              className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "jobs" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
            >
              <span className="text-sm">Jobs</span>
            </div>
            <div
              onClick={() => handleSectionClick("companies")}
              className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "companies" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
            >
              <span className="text-sm">Companies</span>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <h4 className=" text-xs text-gray-500 font-bold uppercase mb-2 flex items-center space-x-2">
          <Users className={`${activeSection === "teams" ? "text-orange-500" : "text-gray-500"}`} size={16} />
          <span>Teams</span>
          </h4>
          
          <div
            onClick={() => handleSectionClick("teams")}
            className={`flex items-center space-x-2 cursor-pointer px-2 py-2 ${activeSection === "teams" ? "text-orange-500 border-r-4 border-orange-500 rounded bg-orange-100" : "text-gray-700"}`}
          >
            <span className="text-sm"> +Create a team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

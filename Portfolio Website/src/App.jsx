import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex h-screen bg-gray-100 p-3 gap-3  container mx-auto w-full">
      {/* Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Right Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Content activeTab={activeTab} />
      </div>
    </div>
  );
}

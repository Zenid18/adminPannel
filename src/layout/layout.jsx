import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Layout({ children, sidebarActive, setSidebarActive }) {
  const [sidebarShow, setSidebarShow] = useState(true);
  return (
    <div>
      <div>
        <Navbar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
      </div>
      <div>
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
        />
      </div>
      <div className="children-div px-4 py-3 transition">{children}</div>
    </div>
  );
}

import { Outlet } from "react-router-dom"

import Sidebar from "../../components/SideBar/Sidebar"

export default function index() {
  return (
    <div className="flex w-full">
       <div className="fixed">
              <Sidebar />
       </div>
       <div className="w-full ml-56">
         <Outlet />
       </div>
    </div>
  )
}

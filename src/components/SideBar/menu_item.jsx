import { useState } from "react";

import { Link } from "react-router-dom";

export default function MenuItem({title, children, to, currentto, setCurrentto }) {
    const isActive = currentto === to;

     
  return (
  <Link to={to}>
      <div onClick = {()=> setCurrentto(to)} className={`flex items-center w-full py-1 px-2 rounded-sm space-x-2 hover:bg-orange-300 my-2 ${isActive?'bg-orange-500 text-orange-50':''}`}>
        {children}
      <spam>{title}</spam>
    </div>
  </Link>
  );
}

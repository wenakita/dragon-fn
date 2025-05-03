import React from "react";

function LogoBadge({ logo1, logo2, size1, size2 }: any) {
  return (
    <div className="relative size-9">
      {/* Main image or content */}
      <img
        src={logo1}
        alt={logo1}
        className="w-full h-full rounded-lg object-cover"
      />

      {/* Badge in bottom-right */}
      <div className="absolute bottom-1 left-5 rig top-4.5 size-5 rounded-md border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
        <img
          src={logo2}
          alt="Badge"
          className="w-full h-full object-cover bg-stone-500"
        />
      </div>
    </div>
  );
}

export default LogoBadge;

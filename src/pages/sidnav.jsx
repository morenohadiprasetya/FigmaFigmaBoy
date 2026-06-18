import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "remixicon/fonts/remixicon.css";

export default function Sidnav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    Swal.fire({
      title: "Yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/");
      }
    });
  };

  // Sembunyikan sidebar hanya di halaman login
  if (location.pathname === "/") {
    return null;
  }

  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-700 text-white shadow-md"
      : "text-blue-100 hover:bg-blue-800 hover:text-white";

  return (
    <div className="fixed top-0 left-0 h-screen w-36 bg-blue-900 text-white shadow-lg flex flex-col justify-between">
      <div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 text-xl font-bold py-4 cursor-pointer border-b border-blue-700"
        >
           
        </div>

        <nav className="flex flex-col mt-4 px-3">
          <Link
            to="/homepage"
            className={`flex items-center gap-2 px-1 py-1 rounded-lg ${isActive(
              "/homepage"
            )}`}
          >
        <i className="ri-home-5-line"></i>
             Beranda
          </Link>
        </nav>
        <nav className="flex flex-col mt-4 px-3">
          <Link
            to="/homepage"
            className={`flex items-center gap-2 px-1 py-1 rounded-lg ${isActive(
              "/homepage"
            )}`}
          >
         <i className="ri-history-line"></i>
             Aktivitas
          </Link>
        </nav>
      </div>

      <div className="p-4">
      
      </div>
    </div>
  );
}
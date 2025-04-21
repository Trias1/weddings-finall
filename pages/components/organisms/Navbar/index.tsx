import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav className="nav">
        <a
          href="/#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#calon"
          onClick={() => setActiveNav("#calon")}
          className={activeNav === "#calon" ? "active" : ""}
        >
          <BiUser />
        </a>
        <a
          href="#weddingDate"
          onClick={() => setActiveNav("#weddingDate")}
          className={activeNav === "#weddingDate" ? "active" : ""}
        >
          <FiBook />
        </a>
        <a
          href="#maps"
          onClick={() => setActiveNav("#maps")}
          className={activeNav === "#maps" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#submitss"
          onClick={() => setActiveNav("#submitss")}
          className={activeNav === "#submitss" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
      <div style={{ paddingBottom: "3rem" }}></div>
    </>
  );
}

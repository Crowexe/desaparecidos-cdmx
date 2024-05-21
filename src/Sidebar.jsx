// src/Sidebar.jsx
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [showMenu1, setShowMenu1] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);

  return (
    <>
        <div className="sidebar">
            <div className="sidebar-content">
                <nav>
                <button onClick={() => setShowMenu1(!showMenu1)}>
                    CDMX
                </button>
                {showMenu1 && (
                    <div className="submenu">
                    <a href="#subitem1-1">Subitem 1-1</a>
                    <a href="#subitem1-2">Subitem 1-2</a>
                    <a href="#subitem1-3">Subitem 1-3</a>
                    </div>
                )}
                <button onClick={() => setShowMenu2(!showMenu2)}>
                    Área metropolitana
                </button>
                {showMenu2 && (
                    <div className="submenu">
                    <a href="#subitem2-1">Subitem 2-1</a>
                    <a href="#subitem2-2">Subitem 2-2</a>
                    <a href="#subitem2-3">Subitem 2-3</a>
                    </div>
                )}
                </nav>
            </div>
        </div>
    </>
  );
};

export default Sidebar;

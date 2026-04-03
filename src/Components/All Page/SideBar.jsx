import React from 'react';

const SideBar = () => {
  return (
    <div>
       <aside>
     <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>My App</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <p>Home</p>
        <p>About</p>
       <p>
         Products
       </p>
       <p> Contact</p>
      </nav>
    </div>
   </aside>
    </div>
  );
};

export default SideBar;
import { Link } from "react-router-dom";

export const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fbcfe8", // Equivalent to bg-pink-100
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Equivalent to shadow-lg
    marginTop: "8px",
    marginBottom: "8px",
    height: "80px",
    alignItems: "center",
    padding: "0 20px",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
  };

  const ulStyle = {
    display: "flex",
    padding: "16px",
    margin: "12px",
    listStyleType: "none",
  };

  const liStyle = {
    padding: "0 8px",
    color: "#1e40af", // Equivalent to text-blue-800
    textDecoration: "underline",
    cursor: "pointer",
  };

  const hoverStyle = {
    color: "#1e3a8a", // Equivalent to hover:text-blue-950
  };

  return (
    <div style={headerStyle}>
      <div style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/" style={{ ...liStyle, ...hoverStyle }}>
              Counter
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/datatable" style={{ ...liStyle, ...hoverStyle }}>
              Table
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/mindmap" style={{ ...liStyle, ...hoverStyle }}>
              MindMap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

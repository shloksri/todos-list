import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "50vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center py-3">Copyright &copy; MyTodoslist.com</p>
    </footer>
  );
};

export default Footer;

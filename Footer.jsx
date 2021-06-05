import React from "react";

function Footer() {
  var currnYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copy right @ {currnYear}</p>
    </footer>
  );
}
export default Footer;

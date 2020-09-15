import React from "react";

const year = new Date().getFullYear();
function Copyright() {
  return (
    <div className="copyright-container">
      <h2 className="copyright">Copyright {year}</h2>
    </div>
  );
}
export default Copyright;

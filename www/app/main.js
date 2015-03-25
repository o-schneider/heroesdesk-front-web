import React from 'react';

window.onload = function () {
  const appNode = document.getElementById("app");
  React.render(<div>
    <h2>In progress</h2>
    <h2>To qualify</h2>
    <h2>To do</h2>
  </div>, appNode);
};

const fourthRound = document.querySelector(".round1 .round:nth-child(4)"); // 4th overall

fourthRound.addEventListener("mouseenter", () => {
  const rect = fourthRound.getBoundingClientRect();

  const hoverDiv = document.createElement("div");
  hoverDiv.textContent =
    "We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.";
  hoverDiv.style.position = "absolute";
  hoverDiv.style.top = rect.bottom + window.scrollY + "px";
  hoverDiv.style.left = rect.left + window.scrollX + "px";
  hoverDiv.style.maxWidth = "300px";
  hoverDiv.style.background = "#297C6B";
  hoverDiv.style.color = "white";
  hoverDiv.style.padding = "12px 16px";
  hoverDiv.style.borderRadius = "8px";
  hoverDiv.style.fontSize = "14px";
  hoverDiv.style.lineHeight = "1.5";
  hoverDiv.style.zIndex = "1000";
  hoverDiv.className = "hover-info-box";

  document.body.appendChild(hoverDiv);
});

fourthRound.addEventListener("mouseleave", () => {
  const existingBox = document.querySelector(".hover-info-box");
  if (existingBox) existingBox.remove();
});

// const lastRound = document.querySelector(".round2 .round:last-child");

// lastRound.addEventListener("mouseenter", () => {
//   const rect = lastRound.getBoundingClientRect();

//   const hoverDiv = document.createElement("div");
//   hoverDiv.textContent =
//     "We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.";
//   hoverDiv.style.position = "absolute";
//   hoverDiv.style.top = rect.bottom + window.scrollY + "px";
//   hoverDiv.style.left = rect.left + window.scrollX + "px";
//   hoverDiv.style.maxWidth = "300px";
//   hoverDiv.style.background = "rgba(0, 0, 0, 0.8)";
//   hoverDiv.style.color = "white";
//   hoverDiv.style.padding = "12px 16px";
//   hoverDiv.style.borderRadius = "8px";
//   hoverDiv.style.fontSize = "14px";
//   hoverDiv.style.lineHeight = "1.5";
//   hoverDiv.style.zIndex = "1000";
//   hoverDiv.className = "hover-info-box";

//   document.body.appendChild(hoverDiv);
// });

// lastRound.addEventListener("mouseleave", () => {
//   const existingBox = document.querySelector(".hover-info-box");
//   if (existingBox) existingBox.remove();
// });

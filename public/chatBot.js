(function () {
  const api_Url = "http://localhost:3000/api/chat";
  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-owner-id");

  if (!ownerId) {
    console.log("Owner Id is not found");
    return;
  }

  const button = document.createElement("div");
  button.innerHTML = "💬";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "22px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
    zIndex: "999999",
  });
  document.body.appendChild(button);

  const box = document.createElement("div");
  Object.assign(box.style, {
    position: "fixed",
    bottom: "90px",
    right: "24px",
    width: "320px",
    height: "420px",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
    display: "flex",
    fontFamily: "Inter, system-ui, sans-serif",
    overflow: "hidden",
    flexDirection: "column",
    zIndex: "999999",
  });

  box.innerHTML= `<div style="
 background: #000;
color: #fff;
padding: 12px 14px;
font-size: 14px;
display: flex;
justify-content: space-between;
  ">
  <span>Customer Support</span>
  <span id="chat-close" style="cursor:pointer; font-size:16px">x</span>
  
  </div>`
  document.body.appendChild(box); 
})();

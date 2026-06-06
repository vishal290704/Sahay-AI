(function(){
    const api_Url = "http://localhost:3000/api/chat"
    const scriptTag = document.currentScript;
    const ownerId = scriptTag.getAttribute("data-owner-id")

    if(!ownerId){
        console.log("Owner Id is not found")
        return
    }

    const button = document.createElement("div")
    button.innerHTML = "💬"
    document.body.append(button)

    Object.assign(button.style, {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#000",
        color: "#fff",
        dispay: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "22px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        zIndex: "999999"

    })
})()
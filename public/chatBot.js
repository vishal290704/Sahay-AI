(function(){
    const api_Url = "http://localhost:3000/api/chat"
    const scriptTag = document.currentScript;
    const ownderId = scriptTag.getAttribute("data-owner-id")

    if(!ownderId){
        console.log("Owner Id is not found")
        return
    }
})()
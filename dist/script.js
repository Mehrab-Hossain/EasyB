const btnHamburger=document.querySelector("#btnHamburger"),header=document.querySelector(".header"),body=document.querySelector(".body"),overlay=document.querySelector(".overlay"),fadeElems=document.querySelectorAll(".has-fade");btnHamburger.addEventListener("click",(function(){console.log("open hamburger"),header.classList.contains("open")?(header.classList.remove("open"),header.classList.remove("noscroll"),fadeElems.forEach((function(e){e.classList.remove("fade-int"),e.classList.add("fade-out")}))):(header.classList.add("open"),header.classList.add("noscroll"),fadeElems.forEach((function(e){e.classList.remove("fade-out"),e.classList.add("fade-in")})))}));
//# sourceMappingURL=script.js.map
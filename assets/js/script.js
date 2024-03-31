const toggleButtons = document.querySelector(".sidebar-toggle")
const closeButtons = document.querySelector(".close-toggle")
const sideBar = document.querySelector(".sidebar")
const bodi = document.querySelector("body")


toggleButtons.addEventListener("click", function(){
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
    sideBar.classList.add("show-sidebar")
});

closeButtons.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar")
})

sideBar.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar")
})

toggleButtons.addEventListener("click", function(){
    bodi.classList.add("sidebaron")
})

closeButtons.addEventListener("click", function(){
    bodi.classList.remove("sidebaron")
})

sideBar.addEventListener("click", function(){
    bodi.classList.remove("sidebaron")
})




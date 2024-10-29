let menulist = document.querySelector("#menuList")
let maincontent = document.querySelector("#Home")
menulist.style.maxHeight= "0px"

maincontent.style.paddingTop="0px"


function toggleMenu(){
    
    if(menulist.style.maxHeight=="0px" ){
        menulist.style.maxHeight="300px"
         maincontent.style.marginTop="240px"
    }

    else{
        menulist.style.maxHeight = "0px"
            maincontent.style.marginTop="0px"
    }

 




    
}
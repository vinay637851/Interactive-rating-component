let data=document.querySelector("input")
let page=document.querySelector(".thanks_page")
let insert=document.createElement("p");
function show(ele){
    ele.parentElement.children[4].style.background="hsl(25, 97%, 53%)"
    for(i=0;i<ele.parentElement.children.length-1;i++)
        ele.parentElement.children[i].style.background="hsl(216, 12%, 24%)"
    ele.style.background="hsl(217, 12%, 63%)"
    insert.innerHTML=`You selected ${ele.innerHTML} out of 5 `
    insert.style.color="hsl(25, 97%, 53%)"
    document.getElementsByClassName("put")[0].appendChild(insert);
    document.getElementsByTagName("input")[0].classList.add("submit")
}
data.addEventListener("click",function(){
    page.classList.toggle('move')
})
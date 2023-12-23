const firstVideoBtn = document.querySelector(".video-play-btn");
const firstVideoStop = document.querySelector(".stop-video i");
const firstVideoDiv = document.querySelector(".video-div-parent");
firstVideoBtn.addEventListener("click",()=>{
    firstVideoDiv.classList.toggle("visibilityOnOff");
});
firstVideoStop.addEventListener("click",()=>{
    firstVideoDiv.classList.toggle("visibilityOnOff");
});



const firstVideoBtn2 = document.querySelector(".video-btn-agriculture-circle");
const firstVideoStop2 = document.querySelector(".stop-video2 i");
const firstVideoDiv2 = document.querySelector(".video-div-parent2");
firstVideoBtn2.addEventListener("click",()=>{
    firstVideoDiv2.classList.toggle("visibilityOnOff");
});
firstVideoStop2.addEventListener("click",()=>{
    firstVideoDiv2.classList.toggle("visibilityOnOff");
});

const innerMenuBtn = document.querySelectorAll(".openNestedUL");
const nestedUlLinks = document.querySelectorAll(".nested-ul-links");
let a =1;
let b =1;
innerMenuBtn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let spaBtnNested = item.previousElementSibling.childNodes[1];
        let nestedList = e.target.nextElementSibling;
        let nestedLi = e.target.nextElementSibling.childNodes;
        let newVal = 0;

        console.log(spaBtnNested);
        if(b===1){
            spaBtnNested.style.transform="rotate(180deg)";
            spaBtnNested.style.backgroundColor="#fff";
            b--;
        }
        else{
            spaBtnNested.style.transform="rotate(0deg)";
            spaBtnNested.style.backgroundColor="#f1cf69";
            b++;
        }

        nestedLi.forEach((item)=>{
            if(item.nodeType === Node.ELEMENT_NODE){
                newVal++;
            }
        });
        console.log(newVal);
        if(a===1){
            let heightUl = newVal*32 + 30;
            nestedList.style.height=`${heightUl}px`;
            nestedList.style.overflow="visible";
            nestedList.style.transitionDuration="300ms";
            a--;
        }
        else{
            nestedList.style.height="0";
            nestedList.style.overflow="hidden";
            nestedList.style.transitionDuration="300ms";
            a++;
        }
    })
})
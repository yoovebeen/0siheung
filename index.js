const wrap = document.getElementsByClassName('wrap')[0];
const container = document.querySelector('section');
let page = 0;
const lastPage = container.length - 1;
const pages = document.querySelectorAll(".page-btn div");


window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > 5){
        page = 5;
    }
    console.log(e.deltaY)
    console.log(page)
    wrap.style.top = page * -100 + 'vh';

    pages.forEach((pageBtn, index) => {
        if(index === page){
            pageBtn.classList.add("pointed");
        } else {
            pageBtn.classList.remove("pointed");
        }
    });

},{passive:false});


pages.forEach((pageBtn, index) => {
    pageBtn.addEventListener("click", function () {
        page = index;
        wrap.style.top = page * -100 + 'vh';
        pages.forEach((btn, idx) => {
            if (idx === page) {
                btn.classList.add("pointed");
            } else {
                btn.classList.remove("pointed");
            }
        });
    });
});

document.addEventListener("wheel", function(){
    
});

const headerTag = document.querySelector("header")
document.addEventListener("scroll", function(){
    const pixels = window.scrollY;

    if(pixels>=headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled");
    }else{
        headerTag.classList.remove("scrolled")
    }
})


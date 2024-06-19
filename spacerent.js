const wrap = document.getElementsByClassName('wrap')[0];
const container = document.querySelector('section');
let page = 0;
const lastPage = container.length - 1;


window.addEventListener('wheel',(e)=>{
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

document.addEventListener("scroll", function() {
    const boxes = document.querySelectorAll('.textbox, .spacebox');
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < windowHeight) {
            box.classList.add('active');
        }
    });
});

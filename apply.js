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
    const textbox = document.querySelector('.textbox');
    const triggerHeight = window.innerHeight / 0.84; // 화면 높이의 1.5배 지점에서 애니메이션 트리거
    const textboxTop = textbox.getBoundingClientRect().top;

    if (textboxTop < triggerHeight) {
        textbox.classList.add('active'); // 애니메이션 클래스 추가
    } else {
        textbox.classList.remove('active'); // 스크롤 업시 애니메이션 클래스 제거
    }
});
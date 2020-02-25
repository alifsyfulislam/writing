var purpleBtn = document.querySelector('.purple_btn');
var purpleSection = document.querySelector('.purple_section');
var purpleHead= document.querySelector('.purple_heading');
var purpleWrite= document.querySelector('.purple_write');
var purpleQues= document.querySelector('.purple_question');
var purplePlay= document.querySelector('.purple_play');
var purpleDes= document.querySelector('.purple_des');
var purpleSub= document.querySelector('.purple_sub');
var leadinG= document.querySelector('.landing_class');


purpleBtn.addEventListener('click',()=>{
    purpleSection.style.display = 'none';
    purpleHead.style.display = 'none';
    purpleBtn.style.display = 'none';
    purpleWrite.style.opacity = 0.15;
    purpleQues.classList.add("show");
    purpleQues.classList.remove("hidd");

    purplePlay.classList.add("show");
    purplePlay.classList.remove("hidd");
});

purplePlay.addEventListener('click',()=>{
    purpleDes.classList.add("show");
    purpleDes.classList.remove("hidd");
    purplePlay.style.display = 'none';
    setTimeout(()=>{
        purpleSub.classList.add("show");
        purpleSub.classList.remove("hidd");
    },5000);
});

purpleSub.addEventListener('click',()=>{
    leadinG.classList.add("show");
    leadinG.classList.remove("hidd");
    purpleDes.classList.add("hidd");
    purpleDes.classList.remove("show");

    purpleQues.classList.add("hidd");
    purpleQues.classList.remove("show");

    purpleSub.classList.add("hidd");
    purpleSub.classList.remove("show");
});
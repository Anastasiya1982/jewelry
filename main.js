/*burger*/
document.querySelector('.burger').addEventListener('click', function(){
    console.log('click on burger')
    document.querySelector('.burger .burger__item').classList.toggle('burger__active');
    document.querySelector('.header').classList.toggle('clearfix');
});

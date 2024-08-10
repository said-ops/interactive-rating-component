const submit = document.querySelector('.submit');
const thank = document.querySelector('.thank');
//select buttons
document.querySelectorAll('.button').forEach(button=>{
    button.addEventListener('click',()=>{
        document.querySelectorAll('.button').forEach(item=>{
            item.classList.remove('selected');
        })
        button.classList.add('selected');
    });
});
//hundle submit
function hundleSubmit(){
    let stars ='0';
    document.querySelectorAll('.button').forEach(button=>{
        if(button.classList.contains('selected')){
            stars = button.textContent;
            console.log('seleted');
        }
    });
thank.style.display = 'flex';
document.querySelector('main').style.display = 'none';
document.querySelector('.rating').textContent = stars;
}
submit.addEventListener('click',hundleSubmit)
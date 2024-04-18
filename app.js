const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

const menuItems = document.querySelectorAll('li');

menuItems &&
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        ul.style.right = '-100%';
    });
});

hamburger && 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        ul.style.right = '1rem';
    } else {
        ul.style.right = '-100%';
    }
});

const dateContainer = document.querySelector('.date');
const date = new Date();
dateContainer &&
(dateContainer.textContent = date.getFullYear());

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox &&
showPasswordCheckbox.addEventListener('change', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

const toolArray = document.querySelectorAll('.tools');
const containerArray = document.querySelectorAll('.container');

if(toolArray && containerArray){
    for(let i=0;i<toolArray.length;i++){
        toolArray[i].addEventListener("click", function(){
            toolArray[i].style.backgroundColor = '#af3333';
            toolArray[i].style.borderLeft = '5px solid black';
            toolArray[i].style.color = 'white';
            containerArray[i].style.display = 'block';

            for(let j=0;j<toolArray.length;j++){
                if(i!=j){
                    toolArray[j].style.backgroundColor = '#f5f6fa';
                    toolArray[j].style.color = 'black';
                    toolArray[j].style.borderLeft = 'none';
                    containerArray[j].style.display = 'none';
                }
            }
        })
    }
};

const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('preview');

  imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        previewImage.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });

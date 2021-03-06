function toggleState(btn){
  btn.dataset.state = (btn.dataset.state == 'off') ? 'on' : 'off'
}

/* show/hide element */
function toggle(btn){
  // el.style.display = (el.style.display == 'block') ? 'none' : 'block'
  if(btn.dataset.state == 'off'){
    btn.dataset.state = 'on';
    btn.nextElementSibling.classList.remove('d-none');
  } else {
    btn.dataset.state = 'off';
    btn.nextElementSibling.classList.add('d-none');
  }
}

/* expandable-list */
function toggleList(btn){
  if(btn.dataset.state == 'off'){
    btn.dataset.state = 'on';
    btn.previousElementSibling.classList.add('exp');
  } else {
    btn.dataset.state = 'off';
    btn.previousElementSibling.classList.remove('exp');
    btn.previousElementSibling.scrollTop = 0;
  }
}

/* add to cart */
function addToCart(btn){
  let elem = btn.previousElementSibling;
  if(elem.classList.contains('visbl')){
    elem.classList.remove('visbl');
  } else {
    elem.classList.add('visbl');
  }
}

function remove(btn){
  let elem = btn.closest('.count-enter');
  elem.classList.remove('visbl');
}

/* readall */
function readall(btn){
  if(btn.dataset.state == 'off'){
    btn.dataset.state = 'on';
    btn.previousElementSibling.style.height = 'auto';
  } else {
    btn.dataset.state = 'off';
    btn.previousElementSibling.style.height = '2.8em';
  }
}

/* online booking */
window.onload = function() {
  let bookingForm = document.forms.bookingForm;
  if(bookingForm!=null) {
    let btnToPage = bookingForm.querySelectorAll('.to-page');

    btnToPage.forEach(function(item, i, arr) {
      item.addEventListener('click', (event) => {
        item.closest('.page').classList.remove('active');
        document.getElementById(item.dataset.target).classList.add('active');
      });
    });

    let radioInputs = bookingForm.querySelectorAll('[type="radio"]');
    radioInputs.forEach(function(item, i, arr) {
      item.addEventListener('change', (event) => {
        let output = item.dataset.out;
        bookingForm.querySelector('#'+output+'').value = item.value;
        verifyMextstep();
      });
    });

    let delBtns = bookingForm.querySelectorAll('.del');
    delBtns.forEach(function(item, i, arr) {
      item.addEventListener('click', (event) => {
        clear(item.previousElementSibling, item.dataset.target);
        verifyMextstep();
      });
    });

    function clear(output, targ){
      output.innerHTML = "";
      let inputs = bookingForm.querySelectorAll('[name="'+targ+'"]');
      inputs.forEach(function(item, i, arr) {
        item.checked = false;
      });
    }

    bookingForm.elements.datetime.addEventListener('input', (event) => {
      verifyMextstep();
    });
    
    function verifyMextstep(){
      let flag;
      let outputsArr = Array.from(bookingForm.querySelectorAll('output'));

      function notNull(element, index, array) {
        if(element.value){
          return element;
        }
      }
      let date = bookingForm.elements.datetime.value;
      console.log('date = '+date);
      if (outputsArr.every(notNull) && date!=''){
        flag=true;
        console.log('flag = '+flag);
      } else {
        flag=false;
        console.log('flag = '+flag);
      }

      // let flag = outputsArr.every(notNull);
      if (flag) {
        console.log('?????? ???????? ??????????????????');
        bookingForm.querySelector('#next-step').removeAttribute('disabled');
      } else {
        console.log('???????? ???????????????????????? ????????');
        bookingForm.querySelector('#next-step').setAttribute('disabled', 'disabled');
      }
    };
  }
}

let modalQuiz = document.getElementById('quiz');

if(modalQuiz!=null) {
  modalQuiz.addEventListener('show.bs.modal', function (event) {
    let arr_slides = Array.from(this.querySelectorAll('.carousel-item'));
    let count = arr_slides.length;
    /* indicator */
    arr_slides.forEach(function(item, i, arr) {
      let indicator = item.querySelector('.indicators');
      let activeCount = i+1;
      let notActive = count-activeCount;
      let j;
      let elems = [];
      for(j = 0; j<activeCount; j++){
        elems.push('<div class="active"></div>');
      }
      for(j = 0; j<notActive; j++){
        elems.push('<div></div>');
      }
      indicator.innerHTML = elems.join(' ');

      let fraction = 100/(count-1);
      let filling = fraction*i;
      indicator.style.setProperty('--filling', filling+'%');
    });
  });
  modalQuiz.addEventListener('hide.bs.modal', function (event) {
  });
}


function verifyInp(input){
  let field = input.closest('fieldset');
  let inputs = Array.from(field.querySelectorAll('.verify'));
  let btn = field.querySelector('button[data-bs-slide="next"]');

  if(inputs.length == 0){
    return;
  } else {
    let flag = inputs.every(notNull);

    if (flag){
      console.log('?????? ???????? ??????????????????');
      btn.removeAttribute('disabled');
    } else {
      console.log('???????? ???? ???????????????????? ????????');
      btn.setAttribute('disabled', 'disabled');
    }
  }

  function notNull(element, index, array) {
    if(element.type == 'radio' || element.type == 'checkbox'){
      let name = element.name;
      let arrInps = Array.from(field.querySelectorAll('input[name="'+name+'"]'));
      console.log(arrInps.some(isChecked));
      if(arrInps.some(isChecked)){return element;}
    } else if (element.type == 'text' && element.value.trim() != ''){
      return element;
    } else if (element.type == 'file' && element.value != null) {
      return element;
    }
  }

  function isChecked(el){
    console.log('value = '+el.value.trim());
    if(el.checked && el.value.trim() != ''){
      return el;
    }
  }
  
};

function loadImgs(input){
  let file;
  let list = input.closest('.input-file-hidden').nextElementSibling;
  let arr = [];
  for(let i = 0; i<input.files.length; i++){
    file = input.files[i];
    arr.push('<div>'+file.name+'</div>');
    console.log(file.name);
  }
  list.innerHTML = arr.join(' ');

  let illustration = input.dataset.illustartion;
  let reader = new FileReader();
  reader.onload = function (e) {
    let img = document.getElementById(illustration);
    img.src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

var myQuiz = document.querySelector('#quiz-form');
var carousel = new bootstrap.Carousel(myQuiz);
function clearQuiz(id){
  let form = document.getElementById(id);

  let imgs = Array.from(form.querySelectorAll('.load-img'));
  imgs.forEach(function(item, i, arr) {
    item.src = 'img/sample.jpg';
  });

  let lists = Array.from(form.querySelectorAll('.file-list'));
  lists.forEach(function(item, i, arr) {
    item.innerHTML = "";
  });

  carousel.to('0');
}
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
      // let inpName = btn.dataset.target;
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
        console.log('все поля заполнены');
        bookingForm.querySelector('#next-step').removeAttribute('disabled');
      } else {
        console.log('есть незаполненые поля');
        bookingForm.querySelector('#next-step').setAttribute('disabled', 'disabled');
      }
    };
    

    // let radGroup_1 = bookingForm.elements.service;
    // radGroup_1.forEach(function(item, i, arr) {
    //   item.addEventListener('change', (event) => {
    //     bookingForm.elements.serviceResult.value = radGroup_1.value;
    //   });
    // });
    // bookingForm.querySelector('#delService').addEventListener('click', (event) => {
    //   item.previousElementSibling.innerHTML = "";
    //   radGroup_1.forEach(function(item, i, arr) {
    //     item.checked = false;
    //   });
    // });
  }
}

var modalQuiz = document.getElementById('quiz');
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

  let reader = new FileReader();
  reader.onload = function (e) {
    let img = document.getElementById('file-img');
    img.src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}
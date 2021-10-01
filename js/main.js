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

/* Online booking */
// function toPage(id){
//   console.log(id);
//   let pages = document.querySelectorAll('aside');
// }

window.onload = function() {
  // let bookingForm = document.getElementById('booking-form');
  let bookingForm = document.forms.bookingForm;
  if(bookingForm!=null) {
    let pages = bookingForm.querySelectorAll('.page');
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
        let inpName = item.name;
        let output = item.dataset.out;
        bookingForm.querySelector('#'+output+'').value = bookingForm.querySelectorAll('[name="'+inpName+'"]').value;
      });
    });

    let delBtns = bookingForm.querySelectorAll('.del');
    delBtns.forEach(function(item, i, arr) {
      item.addEventListener('click', (event) => {
        clear(item.previousElementSibling, item.dataset.target);
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


/* modal aside */
// function showAside(btn){
//   let target = btn.dataset.target;
//   document.getElementById(target).style.left = "0";
// }

// let aside = document.querySelectorAll('aside');
// if(aside!=null) {
//   let arr_asides = Array.from(aside);

//   arr_asides.forEach(function(item, i, arr) {
//     item.querySelector('.close').addEventListener('click', function(e) {
//       item.style.left = "-100%";
//     });

//     document.addEventListener('click', function(e) {
//       const target = e.target;
//       const current_aside = target == item || item.contains(target);
//       // const sel_is_opened = options.classList.contains('opened');
//       if (!current_aside) {
//         item.style.left = "-100%";
//       }
//     });
//   });

// }

// function closeAside(btn){
//   let target = btn.closest('aside');
//   btn.closest('aside').style.left = "-100%";
// }


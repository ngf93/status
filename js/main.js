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


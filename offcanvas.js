

let userMessage = ""

function displayForm (){
   let button = document.getElementById('title')
    button.remove();
    document.getElementById('main').innerHTML = form;
}

//This is a test to display the greet Function outside of the display game function

let loading = `<div id ="loading-dots" class="loading-dots ">
  <div class="loading-dot delay-0"></div>
  <div class="loading-dot delay-1"></div>
  <div class="loading-dot delay-2"></div>
</div>`

let ai_answer0 = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
  <img src="https://louis7.github.io/bubble.2/test_bubble.jpg" class="card-img" alt="...">
  <div class="card-img-overlay  b w-50 h-50 mx-auto my-auto  d-inline-flex p-0 justify-content-center" >

    <p class="align-self-center mt-3">hello?</p>

  </div>
</div>`
let ai_answer1 = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
  <img src="https://louis7.github.io/bubble.2/test_bubble.jpg" class="card-img" alt="...">
  <div class="card-img-overlay  b w-50 h-50 mx-auto my-auto  d-inline-flex p-0 justify-content-center" >

    <p class="align-self-center mt-3">your name?</p>

  </div>
</div>`
function loading_test(){
  setTimeout(function(){
    document.getElementById('main').innerHTML += loading;
    window.scrollTo(0,document.body.scrollHeight);

  },1000);
  setTimeout(function(){
    document.getElementById('loading-dots').remove();

  },2005);
}

function displayfirst(){
  loading_test()
  setTimeout(function(){
    document.getElementById('main').innerHTML += ai_answer0;
    window.scrollTo(0,document.body.scrollHeight);

  },3000);
  setTimeout(function(){
    document.getElementById('main').innerHTML += ai_answer1;
    window.scrollTo(0,document.body.scrollHeight);

  },4000);
}
displayfirst();

//This is a test of display function outside of the display game function




function displayGame (){

   let ai_answer = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
     <img src="https://louis7.github.io/bubble.2/test_bubble.jpg" class="card-img" alt="...">
     <div class="card-img-overlay  b w-50 h-50 mx-auto my-auto  d-inline-flex p-0 justify-content-center" >

       <p class="align-self-center mt-3">Hey `+userMessage+`</p>

     </div>
   </div>`
   let user_bubble = `<div id ="user_bubble" class="col-sm d-flex justify-content-end">
     <div class="card bg-dark  w-25  border m-2 border-white bg-white">
       <img src="https://louis7.github.io/bubble.2/user_bubble.jpg" class="card-img" alt="...">
       <div class="card-img-overlay  b w-50 h-50 mx-auto my-auto  d-inline-flex p-0 justify-content-center" >

         <p class="align-self-center mt-3">`+userMessage+`</p>

       </div>
     </div>
    </div>`
   let customBubble_two = `<div class="card bg-dark  w-50 border m-2 border-white bg-white">
     <img src="https://louis7.github.io/bubble.2/double_bubble3.jpg" class="card-img" alt="...">

   </div>`



   setTimeout(function(){
     loading_test()
   document.getElementById('main').innerHTML += user_bubble;
   window.scrollTo(0,document.body.scrollHeight);

 },500); //delay is in milliseconds
 setTimeout(function(){
   document.getElementById('main').innerHTML += ai_answer;
   window.scrollTo(0,document.body.scrollHeight);

 },2000); //delay is in milliseconds


setTimeout(function(){
  loading_test()
document.getElementById('main').innerHTML += customBubble_two;
window.scrollTo(0,document.body.scrollHeight);

},3500);

}

function saveMessage(){
   userMessage = document.getElementById('text_message').value
  document.getElementById('text_message').value = " "
}


 //need a better solution for hidden/ux experience
const form = `<div id = "nameform" class="mx-auto pt-5" style="width: 200px;">
      <div class="container pt-5" class="mx-auto" style="width: 200px">
         <form class="form-inline">

        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">First Name</label>
          <input type="name" class="form-control" id="name" placeholder="First Names">
         <button type="submit" class="btn btn-light brn-sm mb-2"  onclick="displayGame(); return false" >Next</button>
      </form>
      </div>
 </div>`
function scroll(){
  window.scrollTo(0,document.body.scrollHeight);

}

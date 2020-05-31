

let userMessage = ""

function displayForm (){
   let button = document.getElementById('title')
    button.remove();
    document.getElementById('main').innerHTML = form;
}

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
   let customBubble_two = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
     <img src="https://louis7.github.io/bubble.2/double_bubble.jpg" class="card-img" alt="...">

     </div>
   </div>`
   setTimeout(function(){
   document.getElementById('main').innerHTML += user_bubble;
 },500); //delay is in milliseconds

 setTimeout(function(){
   document.getElementById('main').innerHTML += ai_answer;
 },2000); //delay is in milliseconds

   setTimeout(function(){
  document.getElementById('main').innerHTML += customBubble_two;
},3500); //delay is in milliseconds


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

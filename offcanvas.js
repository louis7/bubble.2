

function displayForm (){
   let button = document.getElementById('title')
    button.remove();
    document.getElementById('main').innerHTML = form;
}

function displayGame (){
   let userName = document.getElementById('name').value;
   document.getElementById('nameform').remove();
   let customBubble = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
     <img src="https://github.com/louis7/manga-bubble/test_bubble.jpg" class="card-img" alt="...">
     <div class="card-img-overlay  b w-50 h-50 mx-auto my-auto  d-inline-flex p-0 justify-content-center" >

       <p class="align-self-center mt-3">`+userName+`</p>

     </div>
   </div>`
   let customBubble_two = `<div class="card bg-dark  w-25  border m-2 border-white bg-white">
     <img src="https://github.com/louis7/manga-bubble/double_bubble.jpg" class="card-img" alt="...">

     </div>
   </div>`
   document.getElementById('main').innerHTML += customBubble;
   setTimeout(function(){
     document.getElementById('main').innerHTML += customBubble_two;
   },1500); //delay is in milliseconds


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

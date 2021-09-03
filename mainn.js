let comment = document.getElementById("comment");
let goal = document.getElementById("goal");
let now = document.getElementById("now");
let remaining = document.getElementById("remaining");

comment.addEventListener("keyup",function(){
  now.innerHTML = this.value.length;
  let limit = goal.value - this.value.length;
  remaining.innerHTML = limit;
  if(limit > 10){
    remaining.classList.remove("over")
    remaining.classList.remove("nearover")
    remaining.classList.add("noover")
  }
  if(limit <= 10){
    remaining.classList.remove("noover")
    remaining.classList.remove("over")
    remaining.classList.add("nearover")
  }
  if(limit < 0){
    remaining.classList.remove("noover")
    remaining.classList.remove("nearover")
    remaining.classList.add("over")
  }
})

goal.addEventListener("keyup",function(){
  let limit = goal.value - comment.value.length;
  remaining.innerHTML = limit;
  if(limit > 10){
    remaining.classList.remove("over")
    remaining.classList.remove("nearover")
    remaining.classList.add("noover")
  }
  if(limit <= 10){
    remaining.classList.remove("noover")
    remaining.classList.remove("over")
    remaining.classList.add("nearover")
  }
  if(limit < 0){
    remaining.classList.remove("noover")
    remaining.classList.remove("nearover")
    remaining.classList.add("over")
  }
})

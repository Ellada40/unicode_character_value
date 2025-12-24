document.querySelector(".btn").addEventListener("click", () =>{
  const input = document.getElementById("input").value;
  const message = document.querySelector(".result");

  if(input.length == 0){
    message.textContent = "Please enter a character";
    message.style.color = "red";
    return;
  }
  const val = input.codePointAt(0);
  message.textContent = `The Unicode value of "${input}" is: ${val}`;
})

  
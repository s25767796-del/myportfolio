setTimeout(()=>{
  document.getElementById("login").classList.remove("hidden");
},4000);

// LOGIN
function login(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("os").classList.remove("hidden");

  print("SYSTEM ACCESS GRANTED ✔");
  print("Type help for commands");
}

// TERMINAL
function handle(e){
  if(e.key === "Enter"){
    const cmd = document.getElementById("cmd").value.toLowerCase();
    run(cmd);
    document.getElementById("cmd").value = "";
  }
}

function print(text){
  document.getElementById("out").innerHTML += `<p>${text}</p>`;
}

function run(cmd){

  switch(cmd){

    case "help":
      print("COMMANDS: help, about, social, clear");
      break;

    case "about":
      print("Shaxinbek - Frontend Cyber Developer");
      break;

    case "social":
      print("IG: instagram.com/USERNAME");
      print("TG: t.me/USERNAME");
      print("PHONE: +998901234567");
      break;

    case "clear":
      document.getElementById("out").innerHTML = "";
      break;

    default:
      print("command not found: " + cmd);
  }
}
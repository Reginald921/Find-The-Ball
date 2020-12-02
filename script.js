let chosenBtn = 0;
let randomBall = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
    };
    let ballValue = (randomBall(1, 4));
 console.log(ballValue);


  console.log(chosenBtn);

BtnClick();
function BtnClick(clicked_id) {
     chosenBtn = clicked_id;
     console.log(chosenBtn + "cup")
     console.log(ballValue + "ball");
    verdict();  
}

function verdict() {
  if(ballValue == 0 || chosenBtn == 0 || chosenBtn == undefined) {
    decision = "blank";
    console.log(decision);
   
  } else if (ballValue == chosenBtn) {
      decision = "win";
      console.log(decision);
      result_log();
      change_cup();
  } else if (ballValue !== chosenBtn) {
      decision = "lost";
      console.log(decision);
      result_log();
      change_cup();
    }
  }
   

   function result_log() {
    if(decision == "win") {
      result_txt = "You Win!!!";
      console.log(result_txt);
      document.getElementById('result_id').innerHTML = result_txt;
  
     } else if (decision == "blank") {
      result_txt = " ";
      console.log(result_txt);
      document.getElementById('result_id').innerHTML = result_txt;
     } else if (decision == "lost") {
     result_txt = "Try Again!";
     console.log(result_txt);
     document.getElementById('result_id').innerHTML = result_txt;
     }
    
    }

    function change_cup() {
      for (let i = 1; i < 4; i++)
     
        if (i == chosenBtn && i == ballValue) {
         document.getElementById([i]).innerHTML = '<img src="/beachBall.png"alt="beach ball">';
        } else {
          document.getElementById([i]).innerHTML = '<img  src="/redXpng.jpg"alt="red x">';
        }

    }

    function restart_Game() {
     clicked_id = 9;
     decision = 0;
     result_txt = " ";
     chosenBtn = 0;
     document.getElementById('result_id').innerHTML = result_txt;
     ballValue = (randomBall(1, 4));
     document.getElementById(1).innerHTML = '<img src="/pics/blue-cup-md.png" alt="blue cup">';
     document.getElementById(2).innerHTML = '<img src="/pics/blue-cup-md.png" alt="blue cup">';
     document.getElementById(3).innerHTML = '<img src="/pics/blue-cup-md.png" alt="blue cup">';

    }
   
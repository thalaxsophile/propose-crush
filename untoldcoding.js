var i = 0;
var txt1 =
  "Hi Love.....!  <<               I wanna say something special to you. <<<                So , Please listen carefully...!                                                                           > When I saw you for the first time < You seemed Special to me.  <<                  As the days went < you got closer to  me....! <<                           I don't know the reason why your thought always resonates inside my mind...!                                                     > Everything about you facinates me...!                     << I am somewhat nervous Because I haven't said these words to anyone...                                                    > I love you, I never thought i'd ever say this but- I'm in love with you...                   << And idk if you saw this coming or not, but i can't help it anymore..I'm falling inlove with you more and more every single day!                                                             >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love ...!   
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

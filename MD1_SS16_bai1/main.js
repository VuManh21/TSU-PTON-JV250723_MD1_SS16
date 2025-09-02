const userAnswer = confirm ("ban muon choi game?");
const message = processConfirm(userAnswer);
function processConfirm(answer) {
  let result;
  
  if (answer) {
    result = "Excellent. We'll play a nice game of chess.";
  } else {
    result = "Maybe later then.";
  }

  return result;
}





alert(message);

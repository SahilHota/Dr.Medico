function quiz(){
    variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    variable1 = parseInt(document.querySelector('input[name = "variable1"]:checked').value);
    variable2 = parseInt(document.querySelector('input[name = "variable2"]:checked').value);
    variable3 = parseInt(document.querySelector('input[name = "variable3"]:checked').value);
  con = parseInt(document.querySelector('input[name = "con"]:checked').value);
  ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
​
​
  result = variable + variable1 + variable2 + variable3 + con + ifstate;
document.getElementById("grade").innerHTML = result;
​
grading = [
  {score:5,feedback:"No Anxiety! Continue living a healthy life style"},
  {score:25,feedback:"Minimal Anxiety; normal for someone your age!"},
  {score:50,feedback:"Healthy amount of Anxiety but try to maintain a healthy life style"},
  {score:75,feedback:"Almost severe anxiety; see a doctor if needed."},
  {score:120,feedback:"Very severe anxiety, see a doctor as soon as possible."}
  ];
result2="";
for(i=0; i<grading.length; i++) {
 if(result >= grading[i].score) {
   result2 = grading[i].feedback + "<br/>";
 }
}
​
document.getElementById("grade2").innerHTML = result2;
​
return false; // required to not refresh the page; just leave this here
//this ends the submit function
console.log("loooool");
}
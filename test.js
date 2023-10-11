function myTest(){
  let x = document.forms["myForm"]["fname"].value;
  if (x == ""){
    alert("Thieu");
    return false;
  }
  let y = document.forms["myForm"]["uname"].value;
  if (y == ""){
    alert("Thieu");
    return false;
  }
}
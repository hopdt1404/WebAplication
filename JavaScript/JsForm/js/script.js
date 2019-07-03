function validateForm(){
    var x = document.forms["myFrom"]["frame"].value;
    if(x ==""){
        alert("Name must be filled out");
        return false;
    }
}
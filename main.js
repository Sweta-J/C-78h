
var Name = ["Family cover page",
            "Deshant Jain Digamber",
            "Sweta Jain Digamber",
            "Divanshi Jain Digamber",
            "Shreshth Jain Digamber"];
var Picture = ["familycoverphoto.jfif",
               "IMG_20150824_102634.jpg",
               "IMG_20151002_200639.jpg",
               "DSC_0020.JPG",
               "1505670842128.jpg"];
var number1 = 0;
var number2 = 0;
function  Familynext(){
    number1 = number1 + 1;
    number2 = number2 + 1;
    if (number1 > 4){
        number1 = 0;
    }
    if (number2 > 4){
        number2 = 0;
    }
    document.getElementById("Namefamily").innerHTML = Name[number1];
    document.getElementById("imgdis").src = Picture[number2];
}

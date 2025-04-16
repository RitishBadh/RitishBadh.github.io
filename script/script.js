function showMessage()
{
    let x = 5;
    let name="Jack";
    let age=19;
    let message = " Hey  "+name+"  age "+age+" welcome to my webpage ";
    alert(message);
}
function checkAge()
{
let age= 15;
if (age>=18)
{
    alert("hey you enter the party")
}
else{
    alert(" You are not old enough")
}
}
function showMany()
{
    for(let i=1; i<=10;i++)
    {
     alert(" Try Count  "+i+"   times")
    }
    
}
function changeColor()
{
    document.getElementById("main").style.color="red";
    document.getElementById("main").style.backgroundColor="grey";

}
function changetoInnerLook()
{
    document.getElementById("Inner Look").src="https://www.restaurantinteriordesign.eu/wp-content/uploads/2019/10/Art-Deco-Lena-Restaurant.jpg";
}
function changetoOuterLook()
{
    document.getElementById("Inner Look").src="https://media.istockphoto.com/id/519360462/photo/cafe-exterior-front.jpg?s=612x612&w=0&k=20&c=qfDN22WM61fjhea1hM10e09NRdYn8oGmzfLYWLXONtA=";
}
window.onload = function () {
    document.getElementById('Buttonss').onmouseover = function () {
        document.getElementById('Buttonss').style.background = 'lightgreen';
    };

    document.getElementById('Buttonss').onmouseleave = function () {
        document.getElementById('Buttonss').style.background = 'grey';
    };
};
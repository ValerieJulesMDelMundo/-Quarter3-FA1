let text = "Do you agree to share your personal information with our site?";
if (confirm(text) == true) {
    var name = prompt("Enter your nickname: ", "0");
    var heightininches = prompt("Enter your height (in inches): ", "o");
    var weightinkg = prompt("Enter your weight (in kg): ", "0");
    
    var heightinfeet = Math.floor(heightininches / 12);
    var remaininginches = heightininches % 12;
    var weight = (weightinkg * 2.20462).toFixed(3);
    
    console.log("Name: ", name, "<br>", "Height: ", heightinfeet,"'",remaininginches,"''", "<br>", "Weight: ", weight,"lbs");
}
else{
    console.log("User does not wish to share his/her information.");
}
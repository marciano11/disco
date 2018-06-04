window.addEventListener("load", function() {
    var myName = document.getElementById("myName");
    var letters = ["G", "L", "I", "T", "C", "H", "!", "!", "!"];
    var Music = new Audio;
    Music.src="ZACK INK - Ze Wil Hangen ft. HEF  LOUIVOS.mp3";
    Music.play();
    function animate() {
        myName.innerHTML = "";
        for(var i = 0; i < 9; i++) {
            var letter = document.createElement('span');
            letter.innerHTML = letters[i];
            letter.style.color = "rgb(" + rndGetal() + "," + rndGetal() + "," + rndGetal() + ")";
            myName.appendChild(letter);
        }
    }
    setInterval(animate, 100);
});

function rndGetal() {
    return Math.floor(Math.random()*255);
}

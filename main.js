function login()
{
    player1=document.getElementById("sm").value;
    player2=document.getElementById("bm").value;
    
    localStorage.setItem("play_1", player1);
    localStorage.setItem("play_2", player2);

    window.location="game.html";
}
#pragma strict

var life : int = 3;
var score : int = 0;
var blockCt : int = 35;

function Start () {
    DontDestroyOnLoad(this);
}

function update () {
    if (blockCt == 0) {
        Application.LoadLevel("GameClear");
    }
}

class Player{
    constructor(Color){
        this.Color = Color;
    }
    createPlayer(Color){
        let player = document.createElement("div");
        player.setAttribute("id", "player")
        player.style.backgroundColor = Color;
        player.classList.add('player');
        document.getElementById('main').insertAdjacentElement("beforeend", player);
    }
    modifierPlayer(posX, posY){
        let player = document.getElementById('player');
        player.style.top = posY
        player.style.left = posX

    }
}

async function main(){
    let level = 0;
    
    let player = new Player("Red");
    player.createPlayer(player.Color);

    switch(level){
        case 0: player.modifierPlayer("35rem", "35rem")
    }

}

main()

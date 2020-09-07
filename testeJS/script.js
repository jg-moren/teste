alert("aaaaa")
var grid = [
[0,0,0],
[0,0,0],
[0,0,0]];
var rodada = 0;

function jogo(ID, grid) {
	var arr = (document.getElementById(ID).id).split('-');
	var y = parseInt(arr[0]);
	var x = parseInt(arr[1]);
	
	if(grid[y][x] == 0 && rodada%2 == 1) {
		rodada = 0
		//alert(`${rodada}`)
		document.getElementById(`${y}-${x}`).src = "img/X.png"
		grid[y][x] = 1
		
	} else if(grid[y][x] == 0 && rodada%2 == 0) {
		rodada = 1
		//alert(`${rodada}`)
		document.getElementById(`${y}-${x}`).src = "img/O.png"
		grid[y][x] = 2
		
	} 

var resultado = 0;
	if (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2]) {
		resultado = grid[0][0];
	} else if (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) {
		resultado = grid[1][0];
	} else if (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2]) {
		resultado = grid[2][0];
	} else if (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) {
		resultado = grid[0][0];
	} else if (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) {
		resultado = grid[0][1];
	} else if (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2]) {
		resultado = grid[0][2];
	} else if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
		resultado = grid[0][0];
	} else if (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
		resultado = grid[2][0];
	}

	if(resultado == 1){
		document.getElementById("img").src = "img/X.png"
		//alert(`vencedor X`)
	}else if(resultado == 2){
		document.getElementById("img").src = "img/O.png"
		//alert(`vencedor O`)

	}
}







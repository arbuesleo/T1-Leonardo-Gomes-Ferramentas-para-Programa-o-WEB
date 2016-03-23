var app = angular.module ("Forca",[]);
app.controller("gameForca", function ($scope) {
	//Desabilita teclado até iniciar partida
	document.getElementById("btnA").disabled = true;
	document.getElementById("btnB").disabled = true;
    document.getElementById("btnC").disabled = true;
    document.getElementById("btnD").disabled = true;
    document.getElementById("btnE").disabled = true;
    document.getElementById("btnF").disabled = true;
    document.getElementById("btnG").disabled = true;
    document.getElementById("btnH").disabled = true;
    document.getElementById("btnI").disabled = true;
    document.getElementById("btnJ").disabled = true;
    document.getElementById("btnK").disabled = true;
    document.getElementById("btnL").disabled = true;
    document.getElementById("btnM").disabled = true;
    document.getElementById("btnN").disabled = true;
    document.getElementById("btnO").disabled = true;
    document.getElementById("btnP").disabled = true;
    document.getElementById("btnQ").disabled = true;
    document.getElementById("btnR").disabled = true;
    document.getElementById("btnS").disabled = true;
    document.getElementById("btnT").disabled = true;
    document.getElementById("btnU").disabled = true;
    document.getElementById("btnV").disabled = true;
    document.getElementById("btnX").disabled = true;
    document.getElementById("btnY").disabled = true;
    document.getElementById("btnZ").disabled = true;
    document.getElementById("btnW").disabled = true;

	//variavel para imagem do boneco
	$scope.imgBoneco = "boneco-forca-0.png";

	//vetor para armazenar as palavras
	$scope.palavras = [];
	$scope.palavras[0] = {palavra:"Casablanca",dica:"É um filme norte-americano de 1942 dirigido por Michael Curtiz."};
	$scope.palavras[1] = {palavra:"Fargo",dica:"É um filme de drama e humor negro dos Estados Unidos de 1996, realizado por Joel Coen."};
	$scope.palavras[2] = {palavra:"O Iluminado",dica:"É um filme anglo-estadunidense de terror psicológico de 1980 produzido e dirigido por Stanley Kubrick."};
	$scope.palavras[3] = {palavra:"Psicose",dica:"É um filme norte-americano de suspense/horror de 1960, dirigido por Alfred Hitchcock."};
	$scope.palavras[4] = {palavra:"Toy Story",dica:"É um filme estadunidense de aventura e comédia de 1995. É conhecido por ser o primeiro longa-metragem dos estúdios Pixar."};
	$scope.palavras[5] = {palavra:"Matrix",dica:"É uma produção cinematográfica estado-unidense e australiana de 1999, dos gêneros ação e ficção científica, dirigido pelas irmãs Wachowski e protagonizado por Keanu Reeves e Laurence Fishburne."};
	$scope.palavras[6] = {palavra:"Titanic",dica:"É  um filme norte-americano de 1997 escrito, dirigido, co-produzido e co-editado por James Cameron."};
	$scope.palavras[7] = {palavra:"Taxi Driver",dica:"É um filme americano de 1976 dirigido por Martin Scorsese. Regularmente citado por críticos, diretores de cinema e público em geral como um dos maiores filmes do cinema dos Estados Unidos."};
	$scope.palavras[8] = {palavra:"Avatar",dica:"É um filme americano de ficção científica de 2009, escrito e dirigido por James Cameron, e estrelado por Sam Worthington, Zoë Saldaña, Michelle Rodriguez, Sigourney Weaver e Stephen Lang.."};
	$scope.palavras[9] = {palavra:"Gladiador",dica:"um filme americano de 2000 dirigido por Ridley Scott e estrelado por Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed, Djimon Hounsou, Derek Jacobi, John Shrapnel e Richard Harris."};
	$scope.palavras[10] = {palavra:"Wall E",dica:"A história segue um robô, criado no ano de 2100 para limpar a Terra coberta por lixo.."};
	$scope.palavras[11] = {palavra:"Up",dica:"O 10ª longa-metragem de animação produzida pelos estúdios Pixar lançada nos Estados Unidos em 29 de maio de 2009."};
	$scope.palavras[12] = {palavra:"A Malvada",dica:"É um filme do gênero drama, escrito e dirigido por Joseph L. Mankiewicz, e produzido por Darryl F. Zanuck."};
	$scope.palavras[13] = {palavra:"Alien",dica:"É um filme dirigido por Ridley Scott e protagonizado por Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm e Yaphet Kotto."};
	$scope.palavras[14] = {palavra:"Star Wars",dica:"É o título de uma franquia de ópera espacial estadunidense criada pelo cineasta George Lucas. A franquia conta com uma série de sete filmes de fantasia científica e um spin-off."};
	$scope.palavras[15] = {palavra:"Chinatown",dica:"É um filme neo-noir estadunidense de 1974, dirigido por Roman Polanski, com roteiro de Robert Towne, e estrelado por Jack Nicholson, Faye Dunaway e John Huston."};
	$scope.palavras[16] = {palavra:"Apocalypse Now",dica:"É um filme norte-americano de guerra de 1979 dirigido por Francis Ford Coppola e escrito por John Milius."};
	$scope.palavras[17] = {palavra:"A Bruxa",dica:"Com muitas cenas de suspense e horror, o filme é situado na Nova Inglaterra, no ano 1630, e é narrado pela jovem Thomasin. Após a mudança de sua família para a nova casa, coisas estranhas começam a acontecer."};
	$scope.palavras[18] = {palavra:"Deadpool",dica:"Baseado no anti-herói não convencional da Marvel Comics, conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson."};
	$scope.palavras[19] = {palavra:"Divertida Mente",dica:"Crescer pode ser uma jornada turbulenta, e com Riley não é diferente. Conforme ela e suas emoções, Alegria , Medo, Raiva, Nojinho e Tristeza se esforçam para adaptar-se à uma nova vida, uma enorme agitação toma conta do centro de controle em sua mente."};

	

	//Plavra escolhida e palavra sendo montada pelo jogador
	$scope.palavraEscolhida = [];
	$scope.palavraMontada = [];
	//quantidade de erros
	$scope.erros = 0;

	//Sorteia uma palavra, inicia variaveis para o jogo e habilita todas as teclas do teclado
	$scope.iniciaJogo = function () {
		var pos = Math.floor(Math.random() * 19 + 0);
		$scope.imgBoneco = "boneco-forca-0.png";
		$scope.erros = 0;
		$scope.palavraEscolhida = [];
		$scope.palavraMontada = [];
		$scope.palavraEscolhida = $scope.palavras[pos].palavra;
		$scope.dica = $scope.palavras[pos].dica;

		for (var i = 0; i < $scope.palavraEscolhida.length; i++) {
			if ($scope.palavraEscolhida[i] == " ") {
				$scope.palavraMontada[i] = "-";
			}
		}
	
		
		document.getElementById("btnA").disabled = false;
		document.getElementById("btnB").disabled = false;
    	document.getElementById("btnC").disabled = false;
    	document.getElementById("btnD").disabled = false;
    	document.getElementById("btnE").disabled = false;
    	document.getElementById("btnF").disabled = false;
    	document.getElementById("btnG").disabled = false;
    	document.getElementById("btnH").disabled = false;
    	document.getElementById("btnI").disabled = false;
    	document.getElementById("btnJ").disabled = false;
    	document.getElementById("btnK").disabled = false;
    	document.getElementById("btnL").disabled = false;
    	document.getElementById("btnM").disabled = false;
    	document.getElementById("btnN").disabled = false;
    	document.getElementById("btnO").disabled = false;
    	document.getElementById("btnP").disabled = false;
    	document.getElementById("btnQ").disabled = false;
    	document.getElementById("btnR").disabled = false;
    	document.getElementById("btnS").disabled = false;
    	document.getElementById("btnT").disabled = false;
    	document.getElementById("btnU").disabled = false;
    	document.getElementById("btnV").disabled = false;
    	document.getElementById("btnX").disabled = false;
    	document.getElementById("btnY").disabled = false;
    	document.getElementById("btnZ").disabled = false;
    	document.getElementById("btnW").disabled = false;

	}


	//Verifica se letra escolhida esta na pavra
	$scope.joga = function (letra) {

		if ($scope.palavraEscolhida == "") 
		{
			$scope.iniciaJogo();
		}
		//Variavel identifica se encontrou a letra na palavra
		var tem = 0;
		//Percorre a palavra e verifica se existe a letra
		for (var i = 0; i < $scope.palavraEscolhida.length; i++) {
			if ($scope.palavraEscolhida[i].toUpperCase() == letra) 
			{	//Vai montando a palavra no vetor palavra montada
				$scope.palavraMontada[i] = $scope.palavraEscolhida[i].toUpperCase();
				tem = 1;

			}
		}
		//se a letra não foi encontrada incrementa o erro e troca imagem do boneco
		if (!tem) 
		{
			$scope.erros++;
			$scope.imgBoneco = "boneco-forca-" + $scope.erros + ".png";
			//Ser erros maior que 5 o jogador perde, exibe mensagem de perdedor
			if ($scope.erros > 5) {
				$scope.msgModal = "Você Perdeu!";
				$('#options').modal('show');
			}

		}//se a letra existe verfica se ganhou
		else
		{
			if ($scope.verificaGanhou()) {
					//Exibe mensagem de ganhador
					$scope.msgModal = "Parabéns Você Ganhou!";
					$('#options').modal('show');	
				}
		}
		
	}
	//Verifica se o vetor palavra montada está completa
	$scope.verificaGanhou = function () {
		//Percorre todo o vetor montado ate o tamanho da palavra escolhida
		for (var i = 0; i < $scope.palavraEscolhida.length; i++) 
		{
			//Se posição for null o jogador nao ganhou ainda
			if ($scope.palavraMontada[i] == null | $scope.palavraMontada[i] == "") 
			{
				return false;
			}
		}
		//Se não tem nenhuma posição null o jogador venceu
		return true;
	}
});
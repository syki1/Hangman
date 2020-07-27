let categories = new Array(6);

categories[0] = "Piłka nożna";
categories[1] = "Programowanie";
categories[2] = "Powiedzenia"; 
categories[3] = "Światowi aktorzy";
categories[4] = "Tytuły filmów";
categories[5] = "Geografia";

var random_category = Math.floor(Math.random()*6);
var my_random = 0;

if (random_category == 0) my_random = Math.floor(Math.random()*10);  // 0-9
else if (random_category == 1) my_random = Math.floor(Math.random()*10) + 10; //10-19
else if (random_category == 2) my_random = Math.floor(Math.random()*10) + 20; //20-29
else if (random_category == 3) my_random = Math.floor(Math.random()*10) + 30; //30-39
else if (random_category == 4) my_random = Math.floor(Math.random()*10) + 40; //40-49
else my_random = Math.floor(Math.random()*10) + 50; //50-59 and others

let passwords = new Array(60);

	passwords[0] = "Liga Mistrzów";  			// football
	passwords[1] = "Arsenal Londyn";
	passwords[2] = "Real Madryt";
	passwords[3] = "Leo Messi";
	passwords[4] = "Cristiano Ronaldo";
	passwords[5] = "Robert Lewandowski";
	passwords[6] = "Wojciech Szczęsny";
	passwords[7] = "Kamil Glik";
	passwords[8] = "Manchester United";
	passwords[9] = "Adam Nawałka";   
									  			// end football
	passwords[10] = "Polimorfizm";  			// programming
	passwords[11] = "Programowanie obiektowe";  
	passwords[12] = "Dziedziczenie";
	passwords[13] = "Konkatenacja";
	passwords[14] = "Java script";
	passwords[15] = "Klasa abstrakcyjna";
	passwords[16] = "Refaktoryzacja";
	passwords[17] = "Polimorfizm";
	passwords[18] = "Funkcja";
	passwords[19] = "Enkapsulacja"; 				// end programming
	
	passwords[20] = "Gość dom Bóg w dom";  			// speaks
	passwords[21] = "Bez pracy nie ma kołaczy"; 
	passwords[22] = "Mądry Polak po szkodzie";
	passwords[23] = "Kto pyta nie bładzi";
	passwords[24] = "Co Cię nie zabije to Cię wzmocni";
	passwords[25] = "Apetyt rośnie w miarę jedzenia";
	passwords[26] = "Co dwie głowy to nie jedna";
	passwords[27] = "Co ma piernik do wiatraka";
	passwords[28] = "Dla chcącego nic trudnego";
	passwords[29] = "Lepszy rydz niż nic"; 				// end speaks
	
	passwords[30] = "Leonardo Di Caprio";   			// famous
	passwords[31] = "Brad Pitt";  
	passwords[32] = "Tom Hanks";
	passwords[33] = "Will Smith";
	passwords[34] = "Jim Carrey";
	passwords[35] = "Penelope Cruz";
	passwords[36] = "Robert Downey Junior";
	passwords[37] = "Robert De Niro";
	passwords[38] = "Mark Whalberg";
	passwords[39] = "Angelina Jolie"; 				// end famous

	passwords[40] = "Skazani na Shawshank"; 				// movie
	passwords[41] = "Zielona Mila"; 
	passwords[42] = "Ojciec Chrzestny"; 
	passwords[43] = "Władca Pierścieni";
	passwords[44] = "Matrix";
	passwords[45] = "Rocky";
	passwords[46] = "Chłopcy z Ferajny";
	passwords[47] = "Mroczny Rycerz";
	passwords[48] = "Kapitan Ameryka";
	passwords[49] = "Forest Gump"; 				// end movie

	passwords[50] = "Ameryka Południowa";   			// geography
	passwords[51] = "Polska";  
	passwords[52] = "Wybrzeże Kości Słoniowej";
	passwords[53] = "Meksyk";
	passwords[54] = "Mount Everest";
	passwords[55] = "Rów Mariański";
	passwords[56] = "Morze Bałtyckie";
	passwords[57] = "Amazonka";
	passwords[58] = "Kasprowy Wierch"; 
	passwords[59] = "Bieszczady"; 				// end geography

let password = passwords[my_random]

password = password.toUpperCase();

let lengthPassword = password.length;
var count_fails = 0;

let password1 = "";

for (let i = 0; i < lengthPassword; i++)
{
	if (password.charAt(i) == " ") password1 = password1 + " ";
	else password1 += "-";
}

function show_password()
{
	document.getElementById("board").innerHTML = password1;
}

window.onload = start;

let letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";


function start()
{
	let divContent = "";

	for (let i = 0; i < 35; i++)
	{
		var element = "lit" + i;
		divContent = divContent + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i + 1) % 7 == 0) divContent = divContent + '<div style="clear:both;"></div>'
		
	}

	document.getElementById("letters").innerHTML = divContent;

	show_password();  // pokazanie pustego hasla -----
	show_category();

}



function show_category()
{
	document.getElementById("category").innerHTML = "Kategoria: " + categories[random_category];
}

String.prototype.setChar = function(position, character) 
{
	if (position > this.length - 1)
	{
		return this.toString();
	}
	else 
	{
		return this.substr(0, position) + character + this.substr(position + 1);
	}
}

function check(nr)
{
	let hit = false;

	for (i = 0; i < lengthPassword; i++)
	{
		if (password.charAt(i) == letters[nr])
		{
			password1 = password1.setChar(i, letters[nr]);
			hit = true;
		}
	}

	if (hit == true)
	{
		var element = "lit" + nr; // id clicknietego
		//document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		//document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).style.opacity = 1.0;
		show_password();
	}
	else
	{
		var element = "lit" + nr; // id clicknietego
		//document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		//document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");
		document.getElementById(element).style.opacity = 0.8;

		count_fails++;
		let image ="s"+count_fails+".jpg";
		document.getElementById("hangman").innerHTML = '<img src="'+image+'" alt="" />'; 

		if (count_fails > 10)
		document.getElementById("letters").innerHTML = "Przegrałeś, prawidłowe hasło to: "+password+
		'<div class = "reset" onclick="location.reload()">KLIKNIJ BY ZAGRAĆ PONOWNIE</div>';
	}

	if (password == password1) 
		document.getElementById("letters").innerHTML = "Wygrałeś, podałeś prawidłowe hasło: "+password+
		'<br/><div class = "reset" onclick="location.reload()">KLIKNIJ BY ZAGRAĆ PONOWNIE</div>';
}




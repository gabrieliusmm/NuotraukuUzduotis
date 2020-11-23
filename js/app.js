let show = document.querySelector('button#rodyti');
let mix = document.querySelector('button#maisyti');
let save = document.querySelector('button#saugoti');

let nuotraukudiv = document.querySelector('div.nuotraukos');

show.addEventListener('click',showimg);
mix.addEventListener('click',miximages);
save.addEventListener('click',saveimages)

let images = ['logo1.png','logo2.png','logo3.png','logo4.png','logo5.png'];
const path = "img/";
function showimg() {
	let ph1 = document.querySelector('#h1text');
	ph1.innerHTML = 'Nuotraukos';
	let imagelist = document.querySelector('.nuotraukos ul')
	for(let i = 0; i < images.length; i++) {
		let li = document.createElement('li');
		imagelist.appendChild(li);
		let imgElement = document.createElement('img');
		li.appendChild(imgElement);
		imgElement.src=path+images[i];
		show.style.display="none";
	}
	let imgElementas = document.querySelectorAll('.nuotraukos ul li img');
	for(let p = 0; p<imgElementas.length; p++) {
		imgElementas[p].ondblclick = function(e) {
			console.log('pressed');
			e.target.src = path + 'gif/clap.gif';
		}
	}
}
function miximages() {
	images.sort(function() {return 0.5 - Math.random()});
	let imgElementai = document.querySelectorAll('.nuotraukos img');
	for(i = 0; i< images.length; i++) {
		imgElementai[i].src = path + images[i];
	}
}
function saveimages() {
	let imgElementai = document.querySelectorAll('.nuotraukos img');
	for(i = 0; i< images.length; i++) {
		localStorage.setItem("image"+i, imgElementai[i].src);
		console.log(imgElementai[i])
	}
}

let print = document.querySelector('button#print')
print.addEventListener('click',printout);
function printout() {

	let ph1 = document.createElement('H1');
	ph1.innerHTML = 'Issaugotos Nuotraukos';
	nuotraukudiv.appendChild(ph1);

	let imagelist = document.querySelector('.savedimg ul')
	for(let i = 0; i < images.length; i++) {
		let li = document.createElement('li');
		imagelist.appendChild(li);
		let imgElement = document.createElement('img');
		li.appendChild(imgElement);
		imgElement.src=localStorage.getItem('image'+i);
		print.style.display="none";
	}
}
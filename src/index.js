import generateJoke from "./generateJoke.js";
import './styles/main.scss';
import image from './assets/image.svg'

const imgDiv = document.getElementById('img');
imgDiv.src = image;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
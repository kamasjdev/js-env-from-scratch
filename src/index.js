import generateJoke from "./generate.joke";
import './styles/main.scss';
import image from './assets/image.svg'

const imgDiv = document.getElementById('img');
imgDiv.src = image;

console.log(generateJoke());
const jokes = [
    "I don't trust stairs. They are always up to something.",
    "I was just looking at my ceiling. Not sure if it’s the best ceiling in the world, but it’s definitely up there.",
    "Why did the man put his money in the freezer? He wanted cold hard cash!",
    "Wife told me to take the spider out instead of killing it... We had some drinks, cool guy, wants to be a web developer.",
    "What kind of dog lives in a particle accelerator? A Fermilabrador Retriever.",
    "Why did Sweden start painting barcodes on the sides of their battleships? So they could Scandinavian.",
    "Where does Fonzie like to go for lunch? Chick-Fil-Eyyyyyyyy.",
    "Chances are if you' ve seen one shopping center, you've seen a mall."
]

function generateJoke() {
    const index = Math.floor(Math.random() * 8);
    const joke = jokes[index];
    document.getElementById('joke').innerHTML = joke;
}

export default generateJoke;
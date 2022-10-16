import generateJoke from './generateJoke.js'

describe('render html', () => {
    const createBodyHtml = () => {
        const element = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'image';
        img.id = 'img';
        const textImg = document.createElement('h3');
        textImg.innerHTML = "Some jokes"
        const jokeDiv = document.createElement('div');
        jokeDiv.id = 'joke';
        const buttonJoke = document.createElement('button');
        buttonJoke.id = 'jokeBtn';
        buttonJoke.innerHTML = "Get another joke";
        buttonJoke.addEventListener('click', generateJoke);
        element.appendChild(img);
        element.appendChild(textImg);
        element.appendChild(jokeDiv);
        element.appendChild(buttonJoke);
        document.body.appendChild(element);
    };

    beforeEach(() => {
        createBodyHtml();
    })

    it('should render html', () => {
        expect(document).not.toBeNull();
        expect(document.body.innerHTML.length).toBeGreaterThan(0);
    })

    it('should render html with images and button', () => {
        const imgDiv = document.getElementById('img');        
        const jokeBtn = document.getElementById('jokeBtn');

        expect(imgDiv).not.toBeNull();
        expect(imgDiv.src).toBe('image');
        expect(jokeBtn).not.toBeNull();
        expect(jokeBtn.innerHTML).toBe('Get another joke');
    })

    it('click button should generate new joke', () => {
        const button = document.getElementById('jokeBtn');
        const jokeBeforeText = document.getElementById('joke').innerHTML;

        button.click();

        const jokeAfter = document.getElementById('joke');
        expect(jokeAfter).not.toBeNull();
        expect(jokeAfter.innerHTML.length).toBeGreaterThan(0);
        expect(jokeAfter.innerHTML).not.toBe(jokeBeforeText);
    })
})

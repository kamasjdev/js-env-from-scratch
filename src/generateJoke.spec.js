import generateJoke from "./generateJoke.js";

describe('generateJoke', () => {
    const elementMock = {
        innerHTML: ''
    };

    it('should generate joke', () => {
        spyOn(document, 'getElementById').and.returnValue(elementMock);

        generateJoke();

        const element = document.getElementById('joke');
        expect(element).not.toBeNull();
        expect(element.innerHTML.length).toBeGreaterThan(0);
    })
})
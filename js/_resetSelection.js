import ghibliData from "./_createElement.js";
import { movieData } from "./_fetchData.js";
import showMovieDetails from "./_movieDetails.js";

export default function resetSelect() {
    const resetButton = document.querySelector('[data-js=resetButton]');

    resetButton.addEventListener('click', () => {
        ghibliData(movieData);
        resetButton.classList.add('hidden');
        showMovieDetails();
    })

}
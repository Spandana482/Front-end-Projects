document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultDiv = document.querySelector('.result');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            getWordInfo(form.elements[0].value.trim());
        });
    }

    const getWordInfo = async (word) => {
        try {
            resultDiv.innerHTML = "Fetching Data....";
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            let definitions = data[0].meanings[0].definitions[0];

            resultDiv.innerHTML = `
                <h2><strong>Word: </strong>${data[0].word}</h2>
                <p class="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
                <p><strong>Meaning: </strong>${definitions.definition === undefined ? "Not found" : definitions.definition}</p>
                <p><strong>Example: </strong>${definitions.example === undefined ? "Not found" : definitions.example}</p>
                <p><strong>Synonyms:</strong></p>
                <ul id="synonyms"></ul>
                <p><strong>Antonyms:</strong></p>
                <ul id="antonyms"></ul>
            `;

            // Populate synonyms as a list
            const synonymsList = document.getElementById("synonyms");
            if (definitions.synonyms.length === 0) {
                synonymsList.innerHTML = `<li>Not found</li>`;
            } else {
                definitions.synonyms.forEach((synonym) => {
                    synonymsList.innerHTML += `<li>${synonym}</li>`;
                });
            }

            // Populate antonyms as a list
            const antonymsList = document.getElementById("antonyms");
            if (definitions.antonyms.length === 0) {
                antonymsList.innerHTML = `<li>Not found</li>`;
            } else {
                definitions.antonyms.forEach((antonym) => {
                    antonymsList.innerHTML += `<li>${antonym}</li>`;
                });
            }

            // Add "Read More" button
            resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target="_blank" class="btn btn-primary mt-3">Read More</a></div>`;
        } catch (error) {
            resultDiv.innerHTML = `<p>Sorry! Word not found</p>`;
        }
    };
});

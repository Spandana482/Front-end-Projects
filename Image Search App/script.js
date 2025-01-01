const accessKey = 'QfeZ5i4eK3c8n7JFyl8aAF37UjRZ5gOPzSEwg1JKLdw';
const searchForm = document.querySelector('form');
const imagesContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

// Function to fetch images using Unsplash API
let page;
const fetchImages = async (query, pageNo) => {
    try {
        if (pageNo === 1) {
            imagesContainer.innerHTML = '';
        }

        const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            data.results.forEach(photo => {
                const imageElement = document.createElement('div');
                imageElement.classList.add('imageDiv');
                imageElement.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description}"/>`;

                // Creating overlay
                const overlayElement = document.createElement('div');
                overlayElement.classList.add('overlay');

                // Creating overlay text
                const overlayText = document.createElement('h3');
                overlayText.innerText = `${photo.alt_description || 'No Description'}`;
                overlayElement.appendChild(overlayText);
                imageElement.appendChild(overlayElement);

                imagesContainer.appendChild(imageElement);
            });

            if (pageNo >= data.total_pages) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        } else {
            imagesContainer.innerHTML = `<h2>No image found</h2>`;
            loadMoreBtn.style.display = 'none';
        }
    } catch (error) {
        imagesContainer.innerHTML = `<h2>Failed to fetch images. Please try again.</h2>`;
        console.error(error);
    }
};

// Adding Event Listener to search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if (inputText !== '') {
        page = 1;
        fetchImages(inputText, page);
    } else {
        imagesContainer.innerHTML = `<h2>Please enter a search query</h2>`;
        loadMoreBtn.style.display = 'none';
    }
});

// Adding Event Listener to load more button to fetch more images
loadMoreBtn.addEventListener('click', () => {
    fetchImages(searchInput.value.trim(), ++page);
});

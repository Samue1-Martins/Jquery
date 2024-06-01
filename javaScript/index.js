
function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log('Data received from API:', data);
            if (data.message && data.status === 'success') {
                const container = document.querySelector("#dogs-container");
                container.innerHTML = ''; 
                const card = document.createElement("div");
                card.classList.add("card");
                const img = document.createElement("img");
                img.src = data.message; 
                const titulo = document.createElement("h3");
                titulo.textContent = "Dog Image"; 
                card.appendChild(img);
                card.appendChild(titulo);
                container.appendChild(card);
            } else {
                console.error('Unexpected response structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
}

function getThreeRandomDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(data => {
            console.log('Data received from API:', data);
            if (Array.isArray(data.message) && data.status === 'success') {
                const container = document.querySelector("#dogs-container3");
                container.innerHTML = '';
                data.message.forEach(imageUrl => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const img = document.createElement("img");
                    img.src = imageUrl; 
                    const titulo = document.createElement("h3");
                    titulo.textContent = "Dog Image"; 
                    card.appendChild(img);
                    card.appendChild(titulo);
                    container.appendChild(card);
                });
            } else {
                console.error('Unexpected response structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
}

function getAllDogs() {
    fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json())
        .then(data => {
            console.log('Data received from API:', data);
            if (Array.isArray(data.message) && data.status === 'success') {
                const container = document.querySelector("#dogs-container3");
                container.innerHTML = ''; 
                data.message.forEach(imageUrl => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const img = document.createElement("img");
                    img.src = imageUrl; 
                    const titulo = document.createElement("h3");
                    titulo.textContent = "Dog Image"; 
                    card.appendChild(img);
                    card.appendChild(titulo);
                    container.appendChild(card);
                });
            } else {
                console.error('Unexpected response structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
}


getRandomDog()

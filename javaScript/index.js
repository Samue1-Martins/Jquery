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
                const link = document.createElement("a");
                link.setAttribute('href', '#');
                link.classList.add("gallery");
                const img = document.createElement("img");
                img.src = data.message;
                link.appendChild(img);
                card.appendChild(link)
                container.appendChild(card);
            } else {
                console.error('Unexpected response structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching dog data:', error);
        });
}

document.addEventListener("DOMContentLoaded", function(){
    getRandomDog()
})

function getThreeRandomDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(data => {
            console.log('Data received from API:', data);
            if (Array.isArray(data.message) && data.status === 'success') {
                const container = document.querySelector("#dogs-container2");
                container.innerHTML = '';
                data.message.forEach(imageUrl => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const link = document.createElement("a");
                    link.setAttribute('href', '#');
                    link.classList.add("gallery");
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    link.appendChild(img);
                    card.appendChild(link);
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
                const container = document.querySelector("#dogs-container2");
                container.innerHTML = '';
                data.message.forEach(imageUrl => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const link = document.createElement("a");
                    link.setAttribute('href', '#');
                    link.classList.add("gallery");
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    link.appendChild(img);
                    card.appendChild(link);
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

$(document).ready(function () {
    $(document).on('click', ".gallery", function (event) {
        event.preventDefault();

        const imgSrc = $(this).find('img').attr('src');
        $('.container-box-shadow').fadeIn('slow');
        $('.container-box-image').fadeIn('slow');
        $("#img").attr('src', imgSrc);
    });

    $(".container-box-shadow").on('click', function () {
        $(this).fadeOut('slow');
        $('.container-box-image').fadeOut('slow');
    });

    $('.container-box-image').on('click', function (event) {
        event.stopPropagation();
    });

    $('.close').on('click', function () {
        $('.container-box-shadow').fadeOut('slow');
        $('.container-box-image').fadeOut('slow');
    });

    const backToTopButton = $('#backToTop');
    $(window).scroll(function(){
        if ($(window).scrollTop() > 800){
            backToTopButton.fadeIn();
        }else{
            backToTopButton.fadeOut();
        }
    })
    backToTopButton.on('click', function(){
        $('html, body').animate({scrollTop: 0 }, 'slow' );
    })
});

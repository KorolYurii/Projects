$(function () {
    $('.slider').slick({
        dots: true,
        // autoplay: false,
        // autoplaySpeed: 4000,
        // arrows: false,
        vertical: true,
    });
    $('.single-item').slick({        
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
        responsive: []

    });
   ;
    $('.news_slider_list').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.arrivals_arrow_left'),
        nextArrow: $('.arrivals_arrow_right'),
        responsive: [
            {
                breakpoint: 1015,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                }
            },
            
            {
                breakpoint: 668,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                }            
            },
                 
            ]
      });
    
    // $('.photo').lightGallery({
    //     controls:true,
    //     counter:true,
    //     download: true,
    //     arrows: true,
    //     escKey: true,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    // })
    
})

//gallery
let gallery = document.getElementById('lightgallery')
lightGallery(gallery,{
    plugins: [lgZoom, lgThumbnail],
    controls: true,
    counter: true,
    download: true,
    arrows: true,
    escKey: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mode: 'lg-fade',
    closeOnTap: true,
    
    
     
})




// lightGallery(document.getElementById('lightgallery'), {
//     plugins: [lgZoom, lgThumbnail],
//     licenseKey: 'your_license_key',
//     speed: 500,
//     controls:true,
//     counter:true,
//     download: true,
//     arrows: true,
//     escKey: true,
    
// });


const customIcon = L.icon({
    iconUrl: './JS/images/marker.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const map = L.map('my-map').setView([51.486603466706335, 31.30802117611757], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);


//Hong Kong
L.marker([22.313208922495647, 114.17263361075162], {icon: customIcon}).addTo(map)
.bindPopup("This is Hong Kong")
.openPopup();
//New-York
L.marker([40.78159296396248, -73.96915881456673], {icon: customIcon}).addTo(map)
.bindPopup("This is New-York")
.openPopup();
//Chernihiv
L.marker([51.486603466706335, 31.30802117611757], {icon: customIcon}).addTo(map)
    .bindPopup("Гармати з бастіонів Чернігівської фортеці — пам'ятка історії місцевого значення в Чернігові, розташована на території Валу. Складається з 12 гармат XVI–XVIII століть.")
    .openPopup();



//scroll document.body.addEventListener('scroll', (event) => console.log(event.target.scrollTop))
document.body.addEventListener('scroll', (event) => {
    if (event.target.scrollTop > 600) {
        document.getElementById('headers').classList.add('headers_scrolled')
    } else {
        document.getElementById('headers').classList.remove('headers_scrolled')
    }
})
    
    


// window.addEventListener('scroll', function() {
//     // let header = document.getElementById('headers').classList            
//     // let active_class = "headers-scrolled"
    
//     if(scrollY > 100) {
//         document.getElementById('.headers').classList.add('headers_scrolled')
//     }
    
   
// })
// window.addEventListener('scroll', function() {
//     if (pageYOffset > 50) {
//       document.querySelector('.header').classList.add('active')
//     } else {
//       document.querySelector('.header').classList.remove('active')
//     }
//   })




//validation
    const NAME_MIN_LENGHT = 2;
    
   
    
    function checkNameLenght() {
        const valueLenght = window.inputName.value.length;
        const diff = valueLenght < NAME_MIN_LENGHT ? NAME_MIN_LENGHT - valueLenght : 0;
        console.log(diff);
        if(diff) {
            window.nameDiffCount.textContent = diff;
            window.nameLenghtHelp.classList.remove('d-none');
        } else {
            window.nameLenghtHelp.classList.add('d-none');
        }
    };
    window.inputName.addEventListener('input', checkNameLenght)

    document.addEventListener('DOMContentLoaded', checkNameLenght)



    const EMAIL_MIN_LENGHT = 5;
    function checkEmailLenght() {
        const valueLenght = window.inputEmail.value.length;
        const diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;
        console.log(diff);
        if(diff) {
            window.emailDiffCount.textContent = diff;
            window.emailLenghtHelp.classList.remove('d-none');
        } else {
            window.emailLenghtHelp.classList.add('d-none');
        }
    };
    

   
    window.inputEmail.addEventListener('input', checkEmailLenght);
    
    document.addEventListener('DOMContentLoaded', checkEmailLenght);
    





    async function formSubmit(event) {
        event.preventDefault();
    
        const email = window.inputEmail.value;
        const name = window.inputName.value;
    
        if(!email || !name) {
            return false;
        }
    
        let apiToken = "6216822090:AAFNNl1KOsugV5ADdSeRsGRDuFMlekDM1Qw";
        let chatId = "-1001845558174";
    
        let text = `
        Email: ${email}    
        Name: ${name}
        `;
    
        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

        let request = new XMLHttpRequest();
        request.open("GET", urlString);
        request.send();
    
             

        
    }


     window.loginForm.addEventListener('submit', formSubmit);

















function toggleMenu(e){
    // e.preventDefault();
    // e.target.classList.toggle('active');
    document.querySelector('.headers').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active'); 
    document.querySelector('.page_wrapper').classList.toggle('menu_open');
    // document.querySelector('.burger').classList.toggle('mobile');
}
  
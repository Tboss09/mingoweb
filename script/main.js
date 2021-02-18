const countDownContainer = document.querySelector('.timer '),
    countDown = document.querySelector('.countdown-cont');
console.log(countDownContainer);

// Set the date we're counting down to
var countDownDate = new Date("Feb 21, 2021 08:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        document.title = `
        MCTT Youth Community Church is Officially Live Streaming Join Us Now | 
        Community Of Vibrant Believers running
        with the commission and mandate of Methodist Church Nigeria `
        countDownContainer.style.display = "none"

    }

    //Remove Cunrdown 



    else {
        document.title = `We are Streaming live On Sunday by 08:00am , ${days} 
        ${days > 1 ? "days" : 'day'}  ${hours} hours to go, Stay Tuned`
    }

}, 1000);


// AutoPlay Gallery
$(window).on('resize orientationchange', function () {
    $('.galleryImages__imgContainer').slick('resize');
});


// // SLDER BEGUN
// $('.gallerycollection-slider').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrow: true,
//     centermood: true,
//     slidesToShow: 3,
//     initialSlide: 0,
//     infinite: true,
//     prevArrow: '<button type = "button" class="slick-prev slick__btn">Previous</button>',
//     nextArrow: '<button type = "button" class="slick-next slick__btn">Previous</button>',
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }]
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
// });





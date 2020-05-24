const video = document.querySelector('#youtubeVideo');


let options = {

    threshold: 1
}

let callback = function (entries, observer) {

    if (entries[0].isIntersecting) {
        
        console.log(entries)
    }
}
let observer = new IntersectionObserver(callback, options)

observer.observe(video)
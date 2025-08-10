

let index = 0

function showslide(){
    let slider = document.querySelector(".carousel-track")
    slider.style.transform = `translateX(-${index * 100}%)`
}

function nextslide(){
    index = (index + 1) % 3
    showslide()
}
function prevSlide(){
    index = (index - 1 + 3) % 3
    showslide()
}

setInterval(() => {

    nextslide()

}, 4000)




let customerFeedback = document.querySelectorAll(".CustomerFeedback")
let currentIndex = 0
let totalSlides = customerFeedback.length

let btn1 = document.querySelector(".left")

let btn2 = document.querySelector(".right")


function ChangeSlide(index){
    customerFeedback[currentIndex].classList.remove("active")
    currentIndex = (index + totalSlides) % totalSlides
    customerFeedback[currentIndex].classList.add("active")

}
btn1.addEventListener("click", () => {
    ChangeSlide(currentIndex - 1)
})
btn2.addEventListener("click", () => {
    ChangeSlide(currentIndex + 1)
})


setInterval(() => {
    
    ChangeSlide(currentIndex + 1)

}, 2000);
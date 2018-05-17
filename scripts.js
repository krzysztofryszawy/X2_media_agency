




let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");


let s2TopOffset = document.getElementById("s2")
let s3TopOffset = document.getElementById("s3")



document.addEventListener("scroll", changeBack)

function changeBack() {
    if (s2TopOffset.getBoundingClientRect().top <=0) {
        back2.classList.remove("invisible")
    }
    if (s3TopOffset.getBoundingClientRect().top <=0) {
        back3.classList.remove("invisible")
    }
    if (s2TopOffset.getBoundingClientRect().top >0) {
        back2.classList.add("invisible")
    }
    if (s3TopOffset.getBoundingClientRect().top >0) {
        back3.classList.add("invisible")
    }
}




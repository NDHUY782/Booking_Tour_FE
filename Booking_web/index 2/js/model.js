btnTym.addEventListener('click', function () {
    btnTym.classList.toggle('active')
})
console.log(btnTym)
var x = localStorage.getItem("mytime");
localStorage.setItem("mytime", Date.now());

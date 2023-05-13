function handleMenu() {
    document.querySelector('.header_top ul').classList.toggle('active')
    document.querySelector('.header_top_container').classList.toggle('active')
    document.querySelector('.nav__mobile-close').classList.toggle('active')
}
function handleWeather() {
    ELEMENT_WEATHER.classList.toggle('active')
    ELEMENT_CONTAINER_WEB.classList.toggle('active')
}

ELEMENT_WEATHER.addEventListener('click', function () {
    handleWeather() 
    
})

ELEMENT_WEATHER_BOX.addEventListener('click', function(event){
    event.stopPropagation()
})

ELEMENT_BTN_WEATHER.addEventListener('click',function() {
        ELEMENT_WEATHER.classList.toggle('active')
        ELEMENT_CONTAINER_WEB.classList.toggle('active')
    })
MenuBarBtn.addEventListener('click', function () {
    handleMenu()
})
ELEMENT_CLOSE_MENU.addEventListener('click', function () {
    handleMenu()
    document.querySelector('')
})
ELEMENT_CLOSE.addEventListener('click', function () {
    handleMenu()
})

TableBtn.addEventListener('click', function () {
    TableSearch.classList.toggle('active')
    ImgContainer.classList.toggle('active')

})

window.addEventListener('scroll',function() {
    const x = this.pageYOffset;
    if (x > 1300) {
        ELEMENT_BOOK_TICKET.classList.add('active')
    } else {
        ELEMENT_BOOK_TICKET.classList.remove('active')
    }
}) 


const handleBooking = (el) => {
    
        let idTour = el.parentElement
        idTour = idTour.parentElement
        idTour = idTour.querySelector('input').value
        console.log(arrApi)
        ELEMENT_HOME_PAGE.style.display = "none"
        ELEMENT_BOOKING.style.display = "flex"
        ELEMENT_IMG_CONTAINER.style.display = "none"
        showPageBooking(idTour)
    }
    
const handleGoHome = () => {
        ELEMENT_BOOKING.style.display = "none"
    }

const showPageBooking = (id) => {
        let data = arrApi.find(item => item.tourID === id)
        for ( const item of ELEMENT_NAME_TOUR) {
            item.innerHTML = data.place
        }
        for ( const item of ELEMENT_TOTAL_DAY) {
            item.innerHTML = data.total_day
        }
        ELEMENT_VEHICLE.innerHTML = data.vehicle
        ELEMENT_DAY.innerHTML = data.departure_day
        ELEMENT_PREV.innerHTML = data.old_price
        ELEMENT_NEW_PRICE.innerHTML = data.sell_off
        ELEMENT_CONTENT_1.innerHTML = data.content1
        ELEMENT_CONTENT_2.innerHTML = data.content2
        ELEMENT_CONTENT_3.innerHTML = data.content3
    }
    const getFavouriteLocalstorage = () => {
        let dataFavourite = JSON.parse(localStorage.getItem('placeFavourite'))
        dataFavourite = dataFavourite ? dataFavourite : []
        return dataFavourite
    }
    let arrData = []
    const btnTyms = document.querySelectorAll('.tym')
        function clickChangeColor(e) {
            if (e.style.color == "red") {
                e.style.color ="black"
                arrData = getFavouriteLocalstorage()
                arrData.map((item,index)=> {
                    if (arrData[index] == e.id ) {
                        arrData.splice(index,1)
                    }
                    localStorage.setItem('placeFavourite', JSON.stringify(arrData))
                })
            }
            else {
                e.style.color = "red"
                arrData.push(e.id)
                localStorage.setItem('placeFavourite', JSON.stringify(arrData))
            }
        }
    
    let readImgs = document.querySelectorAll('.nice-place-img i')
    function renderFavorite() {
        let readImgs = document.querySelectorAll('.nice-place-img i')
        arrData = getFavouriteLocalstorage()
        if (arrData[0]) {
            console.log("ok")
            arrData.map(item => {
                for (const readImg of readImgs) {
                    if (item == readImg.id) {
                        document.getElementById(item).style.color = "red"      
                    }
                }
            })
        }
    }
    
    
    
    async function showData() { 
        await fetch('https://6329cf73d2c97d8c52712f1a.mockapi.io/api/places')
            .then((response) =>response.json())
            .then((data)  => {arrApi = data});
        
        const  showTopPlace =  (arrApi) => {
            let xhtml = ''
            arrApi.map((item, index) => {
                xhtml += `<div  class="nice-place-item">
                                <input type="text" hidden value="${item.tourID}">
                                <div class="nice-place-img">
                                    <div>
                                        <!-- <p class="save">Lưu lại</p> -->
                                        <i id="tym${index}" onclick="clickChangeColor(this)" class="fa-solid fa-heart fa-lg tym"></i>
                                    </div>
                                    <img src="${item.image}" alt="">
                                </div>
                                <div class="nice-place-text">
                                    <h3>Tour ${item.place}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i> 
                                    <p>${item.especially}</p>
                                    <button onclick="handleBooking(this)" class="booking-btn" >Mua Gói Tour</button>
                                </div>
                            </div>`
            })
            ELEMENT_TOP_PLACE.innerHTML = xhtml
        }
        showTopPlace(arrApi)
        renderFavorite()
           
    }
    showData()

    // function sendMail() {
    //     var link = "mailto:huynguyen07080112@gmail.com"
    //              + "?cc=myCCaddress@example.com"
    //              + "&subject=" + encodeURIComponent("This is my subject")
    //              + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    //     ;
        
    //     window.location.href = link;
    // }
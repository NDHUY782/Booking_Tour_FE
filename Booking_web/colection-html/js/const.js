const MenuBarBtn  = document.querySelector('.header_top i')

const TableSearch = document.getElementById('hearder_content')
const ImgContainer = document.querySelector('.img_container_content')


const TableBtn    = document.getElementById('img_container_content_btn')
const ELEMENT_HEADER_TOP = document.querySelector('.header_top')
const ELEMENT_SAVE       = document.querySelectorAll('.save')
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
    arrData = getFavouriteLocalstorage()
    if (arrData[0]) {
        arrData.map(item => {
            for (const readImg of readImgs) {
                if (item == readImg.id) {
                    document.getElementById(item).style.color = "red"      
                }
            }
        })
    }
}
renderFavorite()


// MenuBarBtn.addEventListener('click', function () {
//     document.querySelector('.header_top ul').classList.toggle('active')
// })
// TableBtn.addEventListener('click', function () {
//     TableSearch.classList.toggle('active')
//     ImgContainer.classList.toggle('active')
// })

// window.addEventListener('scroll',function() {
//     const x = this.pageYOffset;
//     console.log(x)
//     if (x > 690) {
//         ELEMENT_HEADER_TOP.classList.add('active')
//     } else {
//         ELEMENT_HEADER_TOP.classList.remove('active')
//     }
// })

const renderDataTopView    = async (url) => {

    // fet api data show TopView
    try {
        let response      = await fetch(url)
        let arrData       = await response.json()
        console.log(arrData)
    } catch {
        console.log('err')
    }

}
renderDataTopView('http://apiforlearning.zendvn.com/api/get-gold')
// console.log(renderDataTopView())

    // function showData() { 
    //     let url     = 'https://api.instantwebtools.net/v1/passenger/';
    //     let res     = fetch(url);
    //     let data    = res.json();
    //     console.log(res)
        
    //  }
    // showData()
    
    // fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
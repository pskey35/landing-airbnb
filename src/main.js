
const image_home_1 = document.querySelector("#image_home-1")
const image_home_2 = document.querySelector("#image_home-2")
window.addEventListener("load", () => {
  const listaImagenes = ["/images/paisaje3.jpg", "/images/paisaje.jfif", "/images/casa3.jpeg", "/images/casa1.jpeg"]

  let i = 0;

  image_home_1.style.cssText = `opacity:0`
  image_home_2.style.cssText = `opacity:1`
  const funcionTemporizador = () => {



    image_home_1.style.cssText = `opacity:0`
    image_home_2.style.cssText = `opacity:1`


    image_home_1.addEventListener("transitionend", () => {


      image_home_1.setAttribute("src", listaImagenes[i])
      image_home_2.setAttribute("src", listaImagenes[i + 1])

      image_home_1.style.cssText = `opacity:1`
      image_home_2.style.cssText = `opacity:0`
    })

    image_home_2.addEventListener("transitionend", () => {


      image_home_1.setAttribute("src", listaImagenes[i])
      image_home_2.setAttribute("src", listaImagenes[i + 1])

      image_home_1.style.cssText = `opacity:1`
      image_home_2.style.cssText = `opacity:0`
    })

    if (i == (listaImagenes.length - 1)) {
      // image_home.style.cssText = "animation:fade 1.6s ease"
      //  clearInterval(intervalo)
      i = 0

      // setInterval(funcionTemporizador,1000)
    }


    i++
  }

  const intervalo = setInterval(funcionTemporizador, 4000)

  intervalo()

})

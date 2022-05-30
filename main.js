window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  // ao mesmo tempo que o constante acontece, ele se refere a estados diferentes da aplicação da rolagem, porém mantem a conta constante mesmo com a variação do estado da pagina
  // const é uma palavra reservada que significa que o bloco que esta dentro da função n vai mudar o valor
  // usar let ao inves de var para criar variaveis no JS (let it change)

  // verificar se a sessão passou da linha imaginaria que divide o tamanho da tela no meio
  // dados necessários:
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document
    .querySelector("#navigation")
    .classList
    .add("scroll")
  } else {
    document
    .querySelector("#navigation")
    .classList
    .remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    document
    .querySelector("#backToTopButton")
    .classList
    .add("show")
  } else {
    document
    .querySelector("#backToTopButton")
    .classList
    .remove("show")
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about p,
#about img`)
// usar a `` para abrir e fechar os comandos para conseguir quebrar as linhas em string, o que naturalmente com as '' não é possível
//dentro do reveal foi colocadas as # para a ordem de aparição do scroll reveal

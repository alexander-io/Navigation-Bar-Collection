(function(){
  // if mouseenter nav-bar, set dropdown to hidden
  let nav = document.getElementById('nav')
  nav.addEventListener('mouseenter', () => {
    // document.getElementById('ddd').style.visibility = 'hidden'
  })

  document.getElementById('ddd').addEventListener('mouseleave', () => {
    // this.style.visibility = 'hidden'
    document.getElementById('ddd').style.visibility = 'hidden'
    // console.log(this)
  })
  // get all nav items
  let nav_items = document.getElementsByClassName('nav-item')
  // loop through the nav items
  for (let i = 0; i < nav_items.length;i++){
    console.log(nav_items[i].getBoundingClientRect())

    nav_items[i].addEventListener("mouseover", function(){
      let rect = this.getBoundingClientRect()
      document.getElementById('ddd').style.visibility = 'visible'
      document.getElementById('ddd').style.backgroundColor = '#ffffff'
      document.getElementById('ddd').width = nav_items[i].getBoundingClientRect().width+'px'
      document.getElementById('ddd').style.left = (nav_items[i].getBoundingClientRect().left - nav_items[i].getBoundingClientRect().width)+'px'
      document.getElementById('ddd').style.top = nav_items[i].getBoundingClientRect().bottom+'px'
    })
  }
})()

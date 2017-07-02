(function(){
  // let input_field = '<div class="input-field col s6"><input id="email_addr" type="text" class="validate"><label for="email_addr">E-mail Address</label></div>'

  // setTimeout(function(){
  //   Materialize.toast('<h5 style="color:white;">Newsletter Sign-up!</h5> '+input_field, 32000)
  // }, 10000)


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

(function(){
  setTimeout(function(){
    console.log('appending newsletter toasterrrr')
    let newsletter_toast = document.createElement('div')
    let newsletter_toast_header = document.createElement('h5')
    let newsletter_toast_input = document.createElement('div')
    let newsletter_toast_input_field = document.createElement('input')
    let newsletter_toast_label = document.createElement('label')
    newsletter_toast_input.className = 'input-field col s6'
    newsletter_toast_input_field.id = 'email_addr'
    newsletter_toast_input_field.type = 'text'
    newsletter_toast_input_field.class = 'validate'
    newsletter_toast_label.for = 'email_addr'
    newsletter_toast_label.style.textAlign = 'center'
    newsletter_toast_label.appendChild(document.createTextNode('E-mail Address'))

    newsletter_toast_input.appendChild(newsletter_toast_label)
    newsletter_toast_input.appendChild(newsletter_toast_input_field)


    newsletter_toast_header.style.color = 'white'
    newsletter_toast_header.style.textAlign = "center"
    newsletter_toast_header.appendChild(document.createTextNode('Newsletter Signup!'))
    newsletter_toast.appendChild(newsletter_toast_header)
    newsletter_toast.appendChild(newsletter_toast_input)
    newsletter_toast.style.position = 'fixed'
    newsletter_toast.style.width = '450px'
    newsletter_toast.style.height = '150px'
    newsletter_toast.style.left = '100px'
    newsletter_toast.style.bottom = '50px'
    newsletter_toast.style.backgroundColor = '#303038'
    newsletter_toast.style.borderRadius = "1%"
    newsletter_toast.style.padding = '1%'
    newsletter_toast.id = 'newsletter_toast'
    newsletter_toast.style.visibility = 'hidden'

    document.body.appendChild(newsletter_toast)
    $("#newsletter_toast").fadeOut()
    setTimeout(function(){
      newsletter_toast.style.visibility = 'visible'

      $("#newsletter_toast").fadeIn()

      // document.getElementById('newsletter_toast').fadeIn(3000)
    }, 10000)
    setTimeout(()=>{
      $("#newsletter_toast").fadeOut()
    }, 32000)
  }, 1000)
})()

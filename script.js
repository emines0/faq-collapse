const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
   toggle.addEventListener('click', () => {
      // access and toggle class active
      toggle.parentNode.classList.toggle('active')
   })
})

const calculator = () => {
  const calcInputItems = document.querySelectorAll('.calc-block input[type=text]')

  calcInputItems.forEach(value => {
    value.addEventListener('input',(e) => {
      e.target.value = e.target.value.replace(/\D+/g, '');
    })
  })
}

export default calculator
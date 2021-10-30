const mainPage = () => {
  const messageForm = document.querySelector('#form2-message')
  const emailForm = document.querySelectorAll('input[type=email]')
  const telForm = document.querySelectorAll('input[type=tel]');
  const nameForm = document.querySelectorAll('[name=user_name]');

  messageForm.addEventListener('blur', (e) => {
    e.target.value = deleteNonCyrillicCharacters(e);
    e.target.value = spaceReplacer(e);
    e.target.value = strikeReplacer(e);
    e.target.value = spaceStrikeDeleter(e);
    e.target.value = capitalizeFirstLetter(e);
  });
  nameForm.forEach(value => {
    value.addEventListener('blur', (e) => {
      e.target.value = deleteNonCyrillicCharacters(e);
      e.target.value = spaceReplacer(e);
      e.target.value = strikeReplacer(e);
      e.target.value = spaceStrikeDeleter(e);
      e.target.value = capitalizeFirstLetter(e);
    })
  })

  emailForm.forEach(value => {
    value.addEventListener('blur', (e) => {
      e.target.value = emailFormCharacters(e);
      e.target.value = spaceReplacer(e);
      e.target.value = strikeReplacer(e);
      e.target.value = spaceStrikeDeleter(e);
    })
  });

  telForm.forEach(value => {
    value.addEventListener('blur', (e) => {
      e.target.value = telFormCharacters(e);
      e.target.value = spaceReplacer(e);
      e.target.value = strikeReplacer(e);
      e.target.value = spaceStrikeDeleter(e);
    })
  })

  const deleteNonCyrillicCharacters = (event) => {
    return event.target.value.replace(/[^а-яё\s-]/gi, '')
  };

  const emailFormCharacters = (event) => {
    return event.target.value.replace(/[^a-z@_.!~*'-]/gi, '')
  };

  const telFormCharacters = (event) => {
    return event.target.value.replace(/[^+\d()-]/gi, '')
  }

  const capitalizeFirstLetter = (event) => {
    return event.target.value.replace(event.target.value[0], event.target.value[0].toUpperCase());
  }
  const spaceReplacer = (event) => {
    return event.target.value.replace(/\s+/g, ' ');
  };

  const strikeReplacer = (event) => {
    return event.target.value.replace(/-+/g, '-');
  };

  const spaceStrikeDeleter = (event) => {
    let strWithoutSpaces = spaceReplacer(event).trim();
    let cleanStr = strWithoutSpaces.replace(/^-+/g, '').trim();
    return cleanStr;
  }

}

export default mainPage;
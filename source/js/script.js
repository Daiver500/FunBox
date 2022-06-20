const initFunction = () => {

  const catalogCards = document.querySelectorAll('.catalog-card');
  const cardsLinks = document.querySelectorAll('.catalog-card-wrapper__bottom-link');

  const activateCard = (evt) => {
    const target = evt.target.closest('.catalog-card-wrapper');
    target.classList.toggle('is-active');
  };


  const hoverActiveCard = (evt) => {
    const target = evt.target.closest('.catalog-card-wrapper');
    if (target.classList.contains('is-active')) {
      target.classList.add('catalog-card--hover');
    }
  };

  const hoverDisActiveCard = (evt) => {
    const target = evt.target.closest('.catalog-card-wrapper');
    target.classList.remove('catalog-card--hover');
  };

  catalogCards.forEach((card) => {
    card.addEventListener('click', activateCard);
    card.addEventListener('click', hoverDisActiveCard);
  });

  catalogCards.forEach((card) => {
    card.addEventListener('mouseover', hoverDisActiveCard);
  });

  catalogCards.forEach((card) => {
    card.addEventListener('mouseout', hoverActiveCard);
  });

  cardsLinks.forEach((link) => {
    link.addEventListener('click', activateCard);
  });

};

export {initFunction};

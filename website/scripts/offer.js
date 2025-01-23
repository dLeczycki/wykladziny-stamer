const offerCards = document.querySelectorAll('.offer-card');
const interval = 4000;

const setActiveOfferCard = () => {
    let activeIndex = -1;
    let nextIndex = -1;

    offerCards.forEach((offerCard, index) => {
        if(offerCard.classList.contains('active')) {
            activeIndex = index;
            nextIndex = activeIndex == offerCards.length - 1 ? 0 : activeIndex + 1;
        }
    });

    offerCards[activeIndex].classList.remove('active');
    offerCards[nextIndex].classList.add('active');
}

setInterval(() => {
    setActiveOfferCard();
}, interval);

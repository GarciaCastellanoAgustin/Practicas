window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 1450,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.scrollMain', {
    duration: 1450,
    origin: 'left',
    distance: '-120px'
});

sr.reveal('.scrollSteps', {
    duration: 2000,
    origin: 'left',
    distance: '500%',
    interval: 106
});

sr.reveal('article', {
    duration: 2000,
    origin: 'right',
    distance: '400%',
    interval: 106
});
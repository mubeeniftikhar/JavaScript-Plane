const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 200, y: -80 },
        { x: 100, y: -140 },
        { x: 100, y: -20 },
        { x: 150, y: 0 },
        { x: 400, y: -40 },
        { x: 600, y: -10 },
        { x: 700, y: 0 },
        { x: 800, y: 20 },
        { x: 900, y: -10 },
        { x: 1000, y: -30 },
        { x: window.innerWidth + 50, y: 0 },
    ],
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut,
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 5000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);
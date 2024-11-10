document.addEventListener("DOMContentLoaded", function () {

    Shery.mouseFollower();
    Shery.makeMagnet("#right .magnet");
    Shery.makeMagnet("#left img");

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("#page-2 video", {
        y: 200,
        opacity: 0
    })

        .from("#heading h1", {
            y: 30,
            clipPath: "inset(0 0 100% 0)",
            ease: "power2.out",
            duration: 2
        })

        .from("#right a", {
            y: 30,
            opacity: 0,
            duration: 1
        }, "-=1.8");

    Shery.hoverWithMediaCircle(".hvr", { videos: ["./assets/hneg.mp4"] });

    gsap.to(".fleftelem", {
        scrollTrigger: {
            trigger: "#fimages",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1
        },
        y: "-300%",
        ease: Power1
    });

    let sections = document.querySelectorAll(".fleftelem");

    Shery.imageEffect(".images", {
        style: 5,
        config: {
            onMouse: { value: 1 },
            "zindex": { "value": "999999", "range": [-9999999, 9999999] }
        },
        slideStyle: (setScroll) => {
            sections.forEach(function (section, index) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    scrub: 1,
                    onUpdate: function (prog) {
                        setScroll(prog.progress + index);
                    },
                });
            });
        },
    });

    document.querySelectorAll('.link-row').forEach(linkRow => {
        linkRow.addEventListener('mouseenter', () => {
            linkRow.style.color = '#ccc';
        });
        linkRow.addEventListener('mouseleave', () => {
            linkRow.style.color = '#fff';
        });
    });

    gsap.to(".follow-section", {
        transform: "translateX(-100%)",
        scrollTrigger: {
            trigger: "footer",
            scroller: "body",
            pin: true,
            scrub: 2,
            start: "top 0%",
            end: "top -110%",
        }
    })


});


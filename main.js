const allcontainer = gsap.utils.toArray(".container-item"),
    venueImageWrap = document.querySelector(".container-img-wrap"),
    venueImage = document.querySelector(".container-img");


    function initContainer() {

        allcontainer.forEach(element => {
            element.addEventListener("mouseenter", venueHover);
            element.addEventListener("mouseleave", venueHover);
            element.addEventListener("mousemove", moveVenueImage)
        });

    }


    function moveVenueImage(e) {

        let xpos = e.clientX,
            ypos = e.clientY;

        const tl = gsap.timeline();
        tl.to(venueImageWrap, {
            x: xpos,
            y: ypos,
        });

    }


    function venueHover(e) {

        if(e.type === "mouseenter") {

            const targetImage = e.target.dataset.img;

            const tl = gsap.timeline();
            tl.set(venueImage, {

                backgroundImage: `url(${targetImage})`,

            }).to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 1,
            });

        } else if (e.type === "mouseleave") {

            const tl = gsap.timeline();
            tl.to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 0,
            })

        }

    }


    function init() {

        initContainer();

    }


    window.addEventListener('load', () => {

        init();

    })
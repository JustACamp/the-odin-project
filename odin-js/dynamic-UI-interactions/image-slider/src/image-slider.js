    const slidesDiv = document.querySelector(".slides");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const images = document.querySelectorAll(".image");
    const navDotDiv = document.querySelector(".navDots");
    const imageWidth = 70;
    document.body.style.setProperty("--imageWidth", `${imageWidth}vw`);

    function createNavDot(imageIndex) {
        const navDot = document.createElement("span");
        navDot.className = "material-symbols-outlined circle";
        navDot.textContent = "radio_button_unchecked";
        navDot.id = "navDot" + imageIndex;
        navDot.addEventListener("click", function() {
            moveSlideDiv(imageIndex);
            selectCircles(imageIndex);
        });
        return navDot;
    };

    let imageIndex = 0;
    images.forEach(function(image){
        image.id = "image" + imageIndex;
        navDotDiv.appendChild(createNavDot(imageIndex));
        imageIndex += 1;
    });

    let transVar = 0;
    imageIndex = 0;
    button1.addEventListener("click", function() {
        if (imageIndex == 0){
            imageIndex = images.length-1;
        } else if (imageIndex > 0) {
            imageIndex += -1;
        };
        moveSlideDiv(imageIndex);
    });
    
    button2.addEventListener("click", function() {
        if (imageIndex < images.length-1) {
            imageIndex += 1;
        } else if (imageIndex == images.length -1) {
            imageIndex = 0;
        };
            moveSlideDiv(imageIndex);
    });

    const circles = document.querySelectorAll(".circle");
    
    function selectCircles (imageIndex) {
        circles.forEach(function(circle) {
            if(circle.id == "navDot" + imageIndex) {
                circle.textContent = "radio_button_checked";
            } else {
                circle.textContent = "radio_button_unchecked";
            };
        });
    };

    function moveSlideDiv (imageIndex) {
        transVar = imageWidth * imageIndex;
        console.log(transVar);
        console.log(imageIndex);
        slidesDiv.style.left = `${-transVar}vw`;
        selectCircles(imageIndex);
    };
    
    


// right arrow moves one image over
// clicking nav dots move to the image of that nav dot
// image width * image index gives relative position
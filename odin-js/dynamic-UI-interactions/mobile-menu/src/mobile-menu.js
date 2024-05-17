    const menuBtns = document.querySelectorAll(".menuHeader");
    console.log(menuBtns);
    // const menus = document.querySelectorAll(".drop-down-menu");
    menuBtns.forEach((button) => {
        const dropdown = document.querySelector("#" + button.id + "~ul")
        button.addEventListener('click', () => {
            if (dropdown.classList.contains("collapse")) {
                dropdown.className = "drop-down-menu";
            } 
            else {
                dropdown.className += " collapse";
                
            }
            
        })
        // window.addEventListener("click", function(event) {
        //     if (event.target != dropdown && event.target != button) {
        //         dropdown.className = "drop-down-menu";
        //         console.log('window');
        //     }
        // });

        
    });
    
    
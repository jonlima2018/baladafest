    //Inicia o menu fechado
    document.querySelector('#menuToggle input').checked = false;
    let startmenu = document.querySelector('#menuToggle input').checked ;


    //evento para abrir o menu
    document.querySelector('#menuToggle input').addEventListener('click', () => {
            
        if( startmenu == false){
            startmenu.checked = true;
        }else{
            startmenu.checked = false;
        }            
    });

    // evento para fechar  menu clicando fora
    document.documentElement.onclick = ((event) => {
        console.log(event.target);
        if(event.target != document.querySelector('#menuToggle input')){
            document.querySelector('#menuToggle input').checked = false;
        }
    })

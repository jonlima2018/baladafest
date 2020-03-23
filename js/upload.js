    
    function mostrarValor() {
      const label = document.querySelector(".labels label");
      const input1 = document.querySelector(".inputfile");
      label.textContent = input1.value.replace("C:\\fakepath\\", "");
    }

    document.querySelector(".inputfile").onchange = function(e) {
      mostrarValor();
    };
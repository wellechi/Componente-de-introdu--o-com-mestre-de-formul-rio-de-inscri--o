function verificarPreenchimento() {
    var meuInputs = document.querySelectorAll("#meuInput");

    meuInputs.forEach(function(input) {
        if (input.value.trim() == '') {
            var imagens = document.querySelectorAll(".card_img");
            var subTitle = document.querySelectorAll(".sub_input_red")
            
            imagens.forEach(function(imagem) {
                imagem.style.display = "block";
            });
            subTitle.forEach(function(sub){
                sub.style.display = "block";
            })
           
            
        }
    });
}
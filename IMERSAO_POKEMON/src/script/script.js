//criando a logica 

//mapear no js o botão
const botao = document.getElementById("botao-alterar-tema");

//mapear no js o body
const body = document.querySelector("body");

const img = document.querySelector(".imagem-botao");

const cardg = document.querySelector(".teste_grama");
const cardf = document.querySelector(".teste_fogo");
const cardi = document.querySelector(".teste_inseto");
const carda = document.querySelector(".teste_agua");


//identificar o click do usuario
botao.addEventListener("click", ()=>{

    // o metodo contains verificar se já existe algo true ou false
    const verifica = body.classList.contains("fundoimg");

    if(verifica==true){

        img.setAttribute("src","/src/imagens/sun.png");
        
        //usando o remove ele remove a imagem anterior
        body.classList.remove("fundoimg")
        cardg.classList.remove("testecardg");
        


        //teste_grama,
        //teste_fogo,
        //teste_inseto,
        //teste_agua


       }else{
        
    //mapeando o fundo e adicionando a troca de tema pela class
    body.classList.add('fundoimg');
    cardg.classList.add("testecardg");
    //mudando a imagem atravez da funçao setAttribute e do caminho ("src,")
    img.setAttribute("src","./src/imagens/moon.png");

   

} 

});
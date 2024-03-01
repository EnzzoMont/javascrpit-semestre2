const listaFilmes = document.querySelector('#listaFilmes')
const filmeInput = document.querySelector('#filmeInput')
const btn1 = document.querySelector('button')
const filmes = ['Carros', 'Bastardo Inglórios', 'Django', 'Cidade de Deus', 'Avatar']
filmes.push('Branquelas')
filmes.pop

btn1.addEventListener('click',()=>{
    let filmeDigitado = filmeInput.value
    console.log(filmeDigitado)
    filmes.push(filmeDigitado)
})


window.onload = () => {
    for(let i=0; i <filmes.length; i++){
        let itemLista = document.createElement('li');
        listaFilmes.append(itemLista)
        itemLista.innerHTML = filmes[i]
    }
}
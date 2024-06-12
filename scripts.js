const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector (".map-all")
const buttonSumAll = document.querySelector (".sum-all")
const buttonOnlyVegan = document.querySelector (".only-vegan")


function currency (value) {
    const NewValue = value.toLocaleString('pt-br',
        {style: 'currency', currency: 'BRL'});
 

        return NewValue
}


function showAll(productarray) {
    let MyLi = " "
    
    productarray.forEach(product => {
        MyLi += `
     <li>
    <img src="${product.src}">
    <p>${product.name}</P>
    <p class="item-price">${ currency(product.price)}</p>
    </li>
    
    `
        list.innerHTML = MyLi

    })

}


function MapAllListen() {
const newPrice = menuOptions.map ((product) =>  ({
...product,
price: product.price * 0.9,

}))

showAll (newPrice)


}

function SumAllitems () {

    const ValueTotal = menuOptions.reduce ((acc,curr) => acc + curr.price, 0)


list.innerHTML = `
 <li>
    <p> O Valor total dos itens é ${ currency(ValueTotal)}</p>
 
`
}



function Onlyvegan () {

const VeganMenu = menuOptions.filter (products => products.vegan)


showAll (VeganMenu)

}


buttonShowAll.addEventListener ("click", () => showAll(menuOptions))
buttonMapAll.addEventListener ("click", MapAllListen)
buttonSumAll.addEventListener ("click", SumAllitems)
buttonOnlyVegan.addEventListener ("click", Onlyvegan)



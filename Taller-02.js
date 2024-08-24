function findMax(lista) {
    let n
    for (let i = 0; i < lista.length; i++) {
        if (i == 0) {
            n = lista[i]
        }
        if (n < lista[i]) {
            n = lista[i]

        }
    }
    return n

}
let l = [3, -1, 4, -19, 17]
console.log(findMax(l))

function includes(lista, _n) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == _n) {
            return true
        }

    }
    return false
}
let _l = [17, 3, -1, 4, -19]
console.log(includes(_l, -1))

function sum(_lista) {
    let s = 0
    for (let i = 0; i < _lista.length; i++) {
        s = _lista[i] + s
    }
    return s
}
let _l1 = [17, 3, -1, 4, -19]
console.log(sum(_l1))

function missingNumbers(_lista1) {
    let n, menor, mayor
    for (let i = 0; i < _lista1.length; i++) {
        if (i == 0) {
            n = _lista1[i]
            menor = _lista1[i]
            mayor = _lista1[i]
        }

        if (mayor < _lista1[i]) {
            mayor = _lista1[i]
        }
        if (menor > _lista1[i]) {
            menor = _lista1[i]
        }

    }
    let listaResultado = []
    for (let m = menor; m < mayor + 1; m++) {
        if (!includes(_lista1, m)) {
            listaResultado.push(m)
        }
    }
    return listaResultado
}
let _l2 = [7,2,4,6,3,9]
console.log(missingNumbers(_l2))

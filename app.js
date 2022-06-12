var chance = require('chance').Chance();
const { name } = require('ejs');
var prompt = require('prompt-sync')
var ps = prompt()
var clientes = []

const titulo = (msg) => {
    console.log('='.repeat(30))
    console.log(msg)
    console.log('='.repeat(30))
}
const birthday = () => {

    const guardarAno = [];

    for (let i = 0; i < 1000; i++) {
        let year = chance.year({ min: 1910, max: 2006 });

        guardarAno[i] = chance.birthday({ string: true, american: false, year: year })
        return guardarAno[i];
    }
}

const nome = () => {

    const guardarNome = [];

    for (let i = 0; i < 1000; i++) {

        guardarNome[i] = chance.name()
        return guardarNome[i];
    }

}

const lastPurchase = () => {
    const guardarDataCompra = [];
    let year = chance.year({ min: 2015, max: 2022 });
    for (let i = 0; i < 1000; i++) {

        guardarDataCompra[i] = chance.birthday({ string: true, american: false, year: year })

        return guardarDataCompra[i];
    }
}

const contaCompras = () => {
    const guardarContagem = [];

    for (let i = 0; i < 1000; i++) {
        guardarContagem[i] = chance.integer({ min: 1, max: 100 });
        return guardarContagem[i];
    }
}

const validarInicial = (letra) => {
    let primeiroNome = cliente['name'].split(" ")
    let splitArr = primeiroNome[0].split('')
    let iniciais = splitArr.filter(inicial => inicial[0] == letra)
    if (iniciais == letra) {
        let nomesListados = cliente['name']
        return console.log(nomesListados)
    }

}

const maioresDeIdade = () => {
    for (let i = 0; i < 1000; i++) {
        let separarBirthday = clientes[i].birthday.split("/");
        if (separarBirthday[0] >= 18) {
            console.log(`Nome:${clientes[i].name} \nIdade:${separarBirthday[0]}`)
        }
    }
}

const somarCompras = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum = sum + clientes[i].contaCompras
    }
    console.log(`Total de vendas: ${sum}`)
}

const filtrarNome = (filtro) => {
    for (let i = 0; i < 1000; i++) {
        let separarName = clientes[i].name.split(" ");
        let separado = separarName

        if (filtro == separado[0]) {
            console.log(clientes[i].name)
        }
    }
}

const ordenarNome = (nome) => {

    let adicionaElemento;
    let flag = 0;
    let nomes = [];
    let salvarNome;

    clientes.shift();
    for (let i = 0; i < 1000; i++) {
        nomes[i] = clientes[i]?.name;
    }

    salvarNome = nomes.find(pesquisa => pesquisa == nome)
    if (salvarNome == nome) {
        for (let i = 0; i < 1000; i++) {
            if (clientes[i]?.name == nome) {
                adicionaElemento = clientes[i];
                flag += 1;
            }
        }
        if (flag == 1) {
            clientes.unshift(adicionaElemento);
        }

    }
}

const filtrarUltimaCompra = () => {
    for (let i = 0; i < 1000; i++) {

        let separarData = clientes[i].lastPurchase.split("/");

        if (separarData[2] < 2022 && separarData[1] < 6) {
            console.log(`Ultima compra de ${clientes[i].name} em : \n${clientes[i].lastPurchase}\n`)
        }

    }
}
const filtrarNumeroDeCompras = () => {
    for (let i = 0; i < 1000; i++) {
        let compra = clientes[i].contaCompras

        if (compra > 15) {
            console.log(`Compras realizadas por ${clientes[i].name}: ${compra}`)
        }
    }
}
const contabilizarAtributos = (atributo) => {
    let acc = 0;
    const contar = (primeiroCaracter) => {

        let validacao = primeiroCaracter.filter(inicial => inicial[0] == atributo)
        if (validacao == atributo) {
            acc += 1;
        }
    }

    for (let i = 0; i < 1000; i++) {
        let separarName = clientes[i].name.split(" ");
        let separarBirthday = clientes[i].birthday.split(" ");
        let separarLP = clientes[i].lastPurchase.split(" ");
        

        let splitarName = separarName[0].split('');
        let splitarBirthday = separarBirthday[0].split('');
        let splitarLP = separarLP[0].split('');

        contar(splitarName);
        contar(splitarBirthday);
        contar(splitarLP);

    }
    return console.log(acc);
}

const primeiroNome = () => {
    for (let i = 0; i < 1000; i++) {
        let separarName = clientes[i].name.split(" ");
        let separado = separarName

        console.log(separado[0])
    }
}

const filtrarInicialNome = (caracter) => {
    let mostrar = [];
    let conversao;
    for (let i = 0; i < 1000; i++) {
        let separarName = clientes[i].name.split(" ");
        let splitar = separarName[0].split('')

        let filtro = splitar.filter(inicial => inicial[0] == caracter.toUpperCase())
        if (filtro == caracter.toUpperCase()) {

            mostrar.push(separarName[0])
            
        }
        
    }
    for (let nome in mostrar){
        console.log(mostrar[nome])
    }
    
}
const validarNome = (nome) => {
    let separado = [];
    for (let i = 0; i < 1000; i++) {
        let separarName = clientes[i].name.split(" ");
        separado.push(separarName[0])

        
    }
    if(separado.find(elemento => elemento == nome)){
        console.log(`\n Há cliente com o nome ${nome}`)
    }
}
const filtrarRegistroPorIniciais = (caracter) => {
    let filtro = [];
    let acc = 0;
    for (let i = 0; i < 1000; i++) {

        let separar = clientes[i].name.split(" ");
        let splitar = separar[0].split('')
        let teste = splitar.filter(inicial => inicial[0] == caracter.toUpperCase())

        if (teste == caracter.toUpperCase()) {
            filtro.push(clientes[i]);
            acc += 1;
        }
    }

    return filtro
}

for (let i = 0; i < 1000; i++) {

    var cliente = new Object();
    cliente.name = nome();
    cliente.birthday = birthday();
    cliente.lastPurchase = lastPurchase();
    cliente.contaCompras = contaCompras();
    // validarInicial('B')
    clientes[i] = cliente
}

while (true) {

    console.log("1. Listar cliente por nome");
    console.log("2. Listar cliente por nome e indice");
    console.log("3. Listar clientes com a inicial");
    console.log("4. Filtrar registros pela inicial");
    console.log("5. Listar apenas nome do cliente");
    console.log("6. Listar primeiro nome do cliente")
    console.log("7. Filtrar nome por inicial e mostrar somente primeiro nome")
    console.log("8. Cliente maiores de idade")
    console.log("9. Verificar se há clientes com o nome")
    console.log("10. Total de compras de todos os clientes")
    console.log("11. Ultima compra do cliente")
    console.log("12. Clientes que realizaram +15 compras")
    console.log("13. Adicionar cliente ao inicio da lista")
    let selecao = Number(ps("Selecionar opcao:"))

    if (selecao == 1) {
        titulo("Listagem de clientes:")
        for (let i = 0; i < 1000; i++) {
            
            console.log(`Cliente: ${clientes[i].name}`)
         }
    } else if (selecao == 2) {
        titulo("Listagem com ID:")
        for (let i = 0; i < 1000; i++) {
            
            console.log(`Cliente ID ${i + 1}: ${clientes[i].name}`)
        }  
    } else if (selecao == 3) {
        titulo("Filtrar registros pela inicial")
        console.log(filtrarRegistroPorIniciais('T'));
    } else if (selecao == 4) {
        titulo("Contabilizar atributos por caracter:")
        contabilizarAtributos('F');
    } else if (selecao == 5) {
        titulo("Filtro por nome:")
        filtrarNome('David');
    } else if (selecao == 6) {
        titulo("Listar primeiro nome:")
        primeiroNome();
    } else if (selecao == 7) {
        titulo("Filtrar pela inicial do nome:")
        filtrarInicialNome('R');
    } else if (selecao ==8){
        titulo("Mostar maiores de idade:")
        maioresDeIdade();
    } else if(selecao == 9){
        titulo("Procurar se há clientes com o nome:")
        validarNome('John');
    }else if(selecao == 10){
        titulo("Total de compras:")
        somarCompras();
    }else if(selecao == 11){
        titulo("Filtrar última compra do cliente")
        filtrarUltimaCompra();
    }else if (selecao == 12){
        titulo("Número de compras por clientes:")
        filtrarNumeroDeCompras();
    }else if (selecao == 13){
        titulo("Trocar primeiro cliente da lista:")
        let pesquisa = ps("Nome do cliente:")
        
        ordenarNome(pesquisa);
    } else if(selecao == 14){
        for (let i = 0; i < 1000; i++) {
            console.log(clientes[i])
         }
    }
    
    else {
        break;
    }
}






















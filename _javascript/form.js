const qtdItens = document.getElementById('cQuantia')
const valorFinal = document.getElementById('cPagar')

let calcularTotal = () => {
    let itens = Number(qtdItens.value)
    let preçoUnitario = 1500
    const TOTAL = preçoUnitario*itens
    valorFinal.value = TOTAL
}
let alerta = document.getElementById('btnEnviar')

let acaoAlerta=()=>{
    window.alert('não clic no botao poxa')
}
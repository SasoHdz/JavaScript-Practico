/* const precioOriginal = 100;
const descuento = 15;
 */

const cupones = [
    {codigo = 'cupon1', descuento = 12 },
    {codigo = 'XCDed3', descuento = 32 },
    {codigo = 'Platzi20', descuento = 20 },
    {codigo = 'SasoHdz12', descuento = 15 },
    {codigo = 'cupon343', descuento = 18 },
];


function calcularPrecionConDescuento(precio, descuento)
{
    const precioDescuento = (precio*(100 - descuento)/100);

    return precioDescuento;
}

function buttonPriceDescount() {

    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputCupon');
    const discountValue = inputDiscount.value;


    const precioDescuento = calcularPrecionConDescuento(priceValue, discountValue);

    document.getElementById('result').innerText = "El precio con descuento es $" + precioDescuento;

}


/* console.log({
    precioOriginal,
    descuento,
    precioDescuento,
}); */
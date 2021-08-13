/* const precioOriginal = 100;
const descuento = 15;
 */

function calcularPrecionConDescuento(precio, descuento)
{
    const precioDescuento = (precio*(100 - descuento)/100);

    return precioDescuento;
}

function buttonPriceDescount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecionConDescuento(priceValue, discountValue);

    document.getElementById('result').innerText = "El precio con descuento es $" + precioDescuento;

}

/* console.log({
    precioOriginal,
    descuento,
    precioDescuento,
}); */
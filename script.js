function muunna() {
    const syote = document.getElementById("lampotila").value.trim();
    const tyyppi = document.getElementById("muunnosTyyppi").value;
    const tulosElem = document.getElementById("tulos");

    const desimaaliInput = document.querySelector('input[name="desimaali"]:checked');
    const tarkkuus = desimaaliInput ? parseInt(desimaaliInput.value) : 2;

    const numero = parseFloat(syote);

    if (isNaN(numero)) {
        tulosElem.textContent = "⚠️ Virhe: Anna kelvollinen luku.";
        return;
    }

    const celsiusArvo = (tyyppi === "CtoF") ? numero : (numero - 32) * 5 / 9;
    if (celsiusArvo < -273.15) {
        tulosElem.textContent = "⚠️ Virhe: Lämpötila ei voi olla pienempi kuin -273,15 °C.";
        return;
    }

    let tulos;

    if (tyyppi === "CtoF") {
        tulos = (numero * 9/5) + 32;
        tulosElem.textContent = `${numero.toFixed(tarkkuus)} °C = ${tulos.toFixed(tarkkuus)} °F`;
    } else if (tyyppi === "FtoC") {
        tulos = (numero - 32) * 5/9;
        tulosElem.textContent = `${numero.toFixed(tarkkuus)} °F = ${tulos.toFixed(tarkkuus)} °C`;
    } else {
        tulosElem.textContent = "⚠️ Virhe: Tuntematon muunnostyyppi.";
    }
}


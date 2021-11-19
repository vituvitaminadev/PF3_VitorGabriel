function calcularVF(){
	const nome = document.getElementById("nome").value;
    const p = document.getElementById("p").value;
    const i = document.getElementById("i").value/100;
    const n = document.getElementById("n").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && p !== '' && i !== '' && n !== '') {
        const vf = p*((((1+i)**n) - 1)/i);

        resultado.textContent = `${nome}, se você aplicar R$${p}, à taxa de juros de ${i*100}% ao mês, durante ${n} meses, acumulará uma poupança de R$${vf.toFixed(2)}`;
    }else {
        resultado.textContent = 'Para calcular o seu valor futuro poupado, preencha todos os campos.';
    }
}
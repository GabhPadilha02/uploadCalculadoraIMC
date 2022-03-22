const buttonCalc = document.getElementById('buttonCalc');

   

function imc () {
    const inputName = document.getElementById('inputName').value;
    const inputHeigth = document.getElementById('inputHeigth').value;
    const inputWeight = document.getElementById('inputWeight').value;
    const resultado = document.getElementById('resultado');

    if (inputName != '' && inputHeigth != '' && inputWeight != ''){
        
        const valorIMC = (inputWeight / (inputHeigth * inputHeigth)).toFixed(2);

        let imcClassification = '';

        if (valorIMC < 18.5){
            imcClassification = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            imcClassification = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30) {
            imcClassification = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            imcClassification = 'com obesidade grau I.';
        }else if (valorIMC < 40) {
            imcClassification = 'com obesidade grau II.';
        }else {
            imcClassification = 'com obesidade grau III. Cuidado!';
        }

        resultado.textContent = `${inputName}, seu IMC é ${valorIMC} e você está ${imcClassification} `;

    }else {
        resultado.textContent = "Preencha todos os campos!!!"
    }


}


buttonCalc.addEventListener('click', imc);
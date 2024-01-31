// Ensure the DOM is fully loaded before executing the JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    let CelciusInput = document.querySelector('.celcius input');
    let fahrenheitInput = document.querySelector('.Fahrenheit input');
    let KelvinInput = document.querySelector('.Kelvin input');
    let btn = document.querySelector('.button button');
  
    function roundNumber(number) {
      return Math.round(number * 100) / 100;
    }
  
    CelciusInput.addEventListener('input', function () {
      let CTemp = parseFloat(CelciusInput.value);
      let fTemp = (CTemp * 9/5) + 32;
      let KTemp = CTemp + 273.15;
      fahrenheitInput.value = roundNumber(fTemp);
      KelvinInput.value = roundNumber(KTemp);
    });
    fahrenheitInput.addEventListener('input', function () {
        let fTemp = parseFloat(fahrenheitInput.value);
        let CTemp = (fTemp - 32) * 5/9;
        let KTemp = (fTemp - 32) * 5/9 + 273.15;
        CelciusInput.value = roundNumber(CTemp);
        KelvinInput.value = roundNumber(KTemp);
      });
    
      KelvinInput.addEventListener('input', function () {
        let KTemp = parseFloat(KelvinInput.value);
        let CTemp = KTemp - 273.15;
        let fTemp = (KTemp * 9/5) + 32;
        CelciusInput.value = roundNumber(CTemp);
        fahrenheitInput.value = roundNumber(fTemp);
      });
    
      btn.addEventListener('click', () => {
        CelciusInput.value = '';
        fahrenheitInput.value = '';
        KelvinInput.value = '';
      });
    });
    
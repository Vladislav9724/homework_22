
function imt() {
    let height = +heightInput.value;
    let massa  = +massaInput.value;

    if(height > 3){
        height = height / 100;
    }

    let index = massa / (height ** 2);

    index = Math.floor(index * 10) / 10;

    indexPlece.innerHTML = index;

    if(index <= 16) {
        meningPlace.innerHTML = "виражений дефіци маси тіла";
    } else if((index > 16) && (index < 18.5)){
        meningPlace.innerHTML = 'недастатня маса тіла';
    } else if((index > 18.5) && (index < 25)) {
        meningPlace.innerHTML = 'норма';
    } else if((index => 25) && (index < 30)){
        meningPlace.innerHTML = 'надмірна маса тіла';
    } else if((index > 30) && (index < 35)){
        meningPlace.innerHTML = 'ожиріння першої категорії';
    } else if((index > 35) && (index < 40)){
        meningPlace.innerHTML = 'ожиріння другої категорії';
    } else if(index >= 40){ 
        meningPlace.innerHTML = "ожиріння третьої котегорії"; 
    }

}
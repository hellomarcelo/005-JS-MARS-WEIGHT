let weight = document.getElementById('weight');
let marsWeight = document.getElementById('weightMars');

weight.addEventListener('keyup', function(e){
    marsWeight.innerHTML = planetWeight(weight.value, 'mars') + ' kg';
})

function planetWeight(weight,planet){
    let earthG = 9.9
    let marsG = 3.71
    return calculate(weight,planet);


    function calculate(weight, planet){
        if(planet == 'mars') return ((parseInt(weight)/earthG)* marsG).toFixed(2)
        }

    }



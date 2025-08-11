  function calculateCost() {



      const distance = document.querySelector('.distance').value
      const mpg = document.querySelector('.mpg').value
      const fuel = document.querySelector('.fuelPrice').value

      const fuelCostUnrounded = (distance / mpg) * fuel
      const fuelCostRounded = fuelCostUnrounded.toFixed(2)
      console.log(fuelCostRounded)
      document.querySelector('.inputCost').innerHTML = ` $${fuelCostRounded}`
    }

    function calculateEmission() {
      const distance = document.querySelector('.distance').value
      const mpg = document.querySelector('.mpg').value
      const fuel = document.querySelector('.fuelPrice').value
      const fuelNeeded = distance / mpg
      const emissionsUnrounded = fuelNeeded * 8.89
      const emissionsRounded = emissionsUnrounded.toFixed(2)
      document.querySelector('.inputEmissions').innerHTML = ` ${emissionsRounded}kg`

    }

    function calculateCostPerMile() {
      const distance = document.querySelector('.distance').value
      const mpg = document.querySelector('.mpg').value
      const fuel = document.querySelector('.fuelPrice').value
      const costPerMileU = fuel / distance
      const costPerMileR = costPerMileU.toFixed(2)
      document.querySelector('.inputCostPerMile').innerHTML = `$${costPerMileR}`
    }

    function falseValues() {
       const distance = document.querySelector('.distance').value
      const mpg = document.querySelector('.mpg').value
      const fuel = document.querySelector('.fuelPrice').value
      if (isNaN(distance) || isNaN(mpg) || isNaN(fuel) ||
    distance <= 0 || mpg <= 0 || fuel <= 0) {
        alert("Please enter valid values.");
        return;
      }

    }


    /*   function containerVisible(id) {
       const container = document.querySelector("." + id);
       container.style.opacity = 1;
       console.log('visiblised')
   
      } */



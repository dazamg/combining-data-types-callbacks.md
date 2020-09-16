 //Section 2
    //1.Create an object, called crayonBox, 
    //that has a property that is an array. 
    //The array should have the names of some crayons. 
    //Log one of the elements of that array.
    const crayonBox = {
        name: ['Beeswax','Carnauba','Aqua','Beige']
      }
      console.log(crayonBox.name[1])
      
      
    //2.Create an object bottle that has a property that is an object: cap. 
    //cap can have properties like material: 'metal' or 'plastic', color:
    // blue or white etc. Log one of the properties of that inner object.
    const bottle = {
        name: 'Sprite',
        cap: {
          material: 'plastic',
          color: 'aqua'
        }
    }
    console.log(bottle.cap.color)
      
    //3Create an array called receipt that has at least one object in it.
    //The inner objects should be items that have a name and a price. 
    //Log one of the properties of that inner object.
      
    const reciept = [
        mac = {
          restaurant: 'chineseDelight',
          menu: {
            name: 'Sushi', price: '4.50',
            name: 'Dumplins', price: '6.50',
            name: 'Pizza', price: '4.50'
          }
        } 
    ]
    for (let word in reciept) {
        console.log(reciept[0].menu.name)
      }
    //Create an array called apartmentBuilding that has an array as one of its elements, 
    //the inner array should be the names of the tenants. 
    //Log one of the elements of the inner array.  
      const apartmentBuilding = [
        name = {
          location: 'Boston Habor',
          tenant : ['bob Noel', 'George Huoen', 'Mateen Paul', 'Sara Mark']
        }
      ]
      console.log(apartmentBuilding[0].tenant[2])


//Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. 
//Log a value of that object (hint: call the function and then call a property on the return value).

//1 
    const knit = () => {
        return {
          item: 'scarf',
          size: '6'
        }
       
      }
      knit().item



    //2. Create a function crayonSelector that returns an object that has an array 
    //(you can reuse your crayonBox object).
    //Log one of the elements of that array
    const crayonSelector = () => {
        return crayonBox = {
        name: ['Beeswax','Carnauba','Aqua','Beige']
        }
    }

    crayonSelector().name[1]


      //3.Create a function powerButton that returns a function called options 
      //- options should console.log a simple message like select a song. Call that inner function


  const powerButton = () => {
    return {
      options: () => {
        console.log('select a song')
      }
    }
  }
  powerButton().options()

  const vendingMachine = {
    snacks: [
      {name: 'Granola', price: 4},
      {name: 'Tortilla chips', price: 2},
      {name: 'Waffle', price: 5}
    ],
    vend: (arrPosition) => {
        return vendingMachine.snacks[arrPosition].name;
    }
   } 
   vendingMachine.vend(1);
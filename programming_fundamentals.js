//DRY
Means to avoid repetition of the same code or concept.

//KISS
Try to make your task at hand or your goal as simple as possible.

//Avoid creating a YAGNI
Stick to your simple code, and don't add extra functionality until you need it

// Do the simplest thing that could possibly work
Having the mindset to try to find the simplest possible design.

//Don't make me think
Someone should be able to read, and understand your code with minimum effort.

//Write code for the maintainer
Write codes that are easy to access, and change in the future.

// Single responsibility principle
Every module, class, and function should have responsibility over a single task.

//Avoid premature optimization
Don't get ahead of yourself, Make sure your code running and working before you decide to optimize.

//Separation of concerns
Different areas of concerns should be sperated and managed by distinct and minimally overlapping modules of code.

//Which ones surprise you (if any)?
Avoid premature optimization

//Which one is currently giving you the most struggle?
KISS - I haven't learn all the concept yet and needs more repetition.



// first code line 36 is a if statement
// console log different values to see the changes 
// talk out aloud to makes sense of what each line is doing


//function f have a parameter name l
// I didn't understand this one
const f = l => {
    // declaring the variables 
      let es = 0, p = 0, c = 1, n = 0
    // while loop to run the conditions 
      while (c <= l) {
    //First condition variable calculation to determine the sum of variable n equal to 1 + 0 =1
        n = c + p;
    //Second condition is an array to store the values - [1,0]=[1,1]    
        [c, p] = [n, c]
    // Third condition variable states if (1%2 === 0)/(false === 0)
    //and if 1:0 add the result to es(0)
        es += (c % 2 === 0) ? c : 0
      }
     // return the sum of es
      return es
    }
    
    console.log(f(55))
    
    
    
    //2.
    // if the current number is divisible by 2 then add numbers, the sum will be evensum
    //next = current + previous
    //1 = 1+0
    //2 = 1+1
    //3 = 2+1
    //5 = 3+2
    //8 = 5+3
    //13 = 8+5
    //21 = 13+8
    //34 = 21+13
    //55 = 34+21
    
    const f2 = (limit) => {
      let evenSum = 0;
      let previous = 0;
      let current = 1
      while (current <= limit) {
        //1 repeat
        let next = current + previous;
        //2 repeat
        previous = current;
        //3 & repeat
        current = next;
       // 
        if (current % 2 === 0) {
          evenSum += current;
        }
      }
      return evenSum;
    }
    
    
    console.log(f2(55))
    





  
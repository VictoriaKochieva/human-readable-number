module.exports = function toReadable(number) {

let zero = " "

    let upToNine = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6:  "six" ,
        7: "seven",
        8: "eight",
        9: "nine"
    }
   
    let teens = {
        6: "six" ,
        7: "seven",
        8: "eight",
        9: "nine"
    }
    
    
    let upToFifteen = {
       10: "ten",
       11: "eleven",
       12: "twelve",
       13: "thirteen",
       14: "fourteen",
       15: "fifteen"
    }
       
    
   
    let decimals = {
       20: "twenty",
       30: "thirty",
       40: "forty",
       50: "fifty" 
    }
    
    
     let sixtyUpToNinety = {
       60: "sixty",
       70: "seventy",
       80: "eighty",
       90: "ninety"
    }
   
    let hundredths = {
       100: "one hundred " ,
       200: "two hundred ",
       300: "three hundred ",
       400: "four hundred ",
       500: "five hundred ",
       600: "six hundred ",
       700: "seven hundred ",
       800: "eight hundred ",
       900: "nine hundred "
    }
   
    if (number >= 1 && number <= 9){
        return upToNine[number]
    }
    
    else if (number >= 10 && number <= 15){
        return upToFifteen[number]
    }
   else if (number >= 16 && number <= 19) {
    let num = number % 10
        return teens[num] + "teen"
    }
   
    else if (number >= 20 && number <= 59) {
      let remainder1  = Math.floor(number % 10) * 10;
        let remainder2  = number % 10;
       return decimals[remainder1] + ` ${upToNine[remainder2 ]}`
   }
   
   else if (number >= 60 && number <= 99) {
      let remainder1 = Math.floor(number % 10) * 10;
        let remainder2  = number % 10;
       return sixtyUpToNinety[remainder1]  + ` ${upToNine[remainder2 ]}`
   }
   
   else if (number >= 100 && number <= 999) {
       let rounding  = (Math.floor(number / 100) * 100);
       let remainder1 = number % 100;
       let remainder2 = (Math.floor((number % 100) / 10))  * 10;
       let remainder3 = number % 10;  

      else if (remainder1 >= 10 && remainder1 <= 15){
        return  hundredths[rounding]  + upToFifteen[remainder1]
        }
       else if (remainder1 >= 16 && remainder1 <= 19) {
        return  hundredths[rounding] + teens[remainder3] + "teen"
         
        }
    
        else if (remainder1 >= 20 && remainder1 <= 59) {
            return hundredths[rounding] + decimals[remainder2] + ` ${upToNine[remainder3 ]}`
       } else if (remainder1 >= 60 && remainder1 <= 99){
            return hundredths[rounding] + sixtyUpToNinety[remainder2]  + ` ${upToNine[remainder3 ]}`
       } 
        
         }

    else {
      return undefined
    }   
    
   }
   
  
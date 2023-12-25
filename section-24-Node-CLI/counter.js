
const {incrementCounter, getCounter} = require('./pathTest/counterExample')

incrementCounter();
incrementCounter();
incrementCounter();

getCounter();//ideally should return 3 but I also dont think that can be becuase we did not import the varaible 'counter' that holds the value for these functions to work on - in this current script --- it did return 3 <!> - howcome? I thought it only had 1-time reference to that variable?

//version2 with passing and destructuring the variable 'counter'


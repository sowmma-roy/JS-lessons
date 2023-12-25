//declaring a counter variable and exporting functions that modify the counter 

let counter = 0;

module.exports = {
    incrementCounter () {
        counter += 1
    },

    getCounter () {
        console.log(counter)
        return counter
    }
}
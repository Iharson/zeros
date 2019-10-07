module.exports = function zeros(expression) {
    let arr = expression.split('*');
    let fives = 0;
    let twos = 0;

    arr.forEach(element => {

        let match = element.match(/!/g).length;
        element = parseInt(element);

        for (element; element > 0; element -= match) {
            let e = element;
            while (e % 5 === 0) {
                fives++;
                e /= 5;
            }

            while (e % 2 === 0) {
                twos++;
                e /= 2;
            }
        }
    });

    return fives > twos ? twos : fives;
};

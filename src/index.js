/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// module.exports = function getLoveTrianglesCount(preferences) {
//     function compareNumbers(a, b) {
//         return a - b;
//     }
//     const arr = preferences.sort(compareNumbers);
//     let test;

//     if (arr[0] < (arr[1] + 1 || arr[1] < (arr[1] + 1))) {
//         test = 1;
//     } else { test = 0; }
//     return (test);
// };

module.exports = function getLoveTrianglesCount(preferences) {
    let len = Math.floor(preferences.length / 3);

    let count = 0;


    for (let i = 0, iM = 0; i < len; i++, iM += 3) {

        let a = iM,
            b = a + 1,
            c = a + 2;


        let first = preferences[a],
            second = preferences[b],
            third = preferences[c],
            len = Math.floor(preferences.length / 3);


        if (second == first + 1 && third == first - 1) {

            count += 1;
        } else { count += 0; }


    }


    return (count);
};
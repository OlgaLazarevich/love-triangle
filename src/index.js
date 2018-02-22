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
    function compareNumbers(a, b) {
        return a - b;
    }
    const arr = preferences.sort(compareNumbers);

    const len = arr.length / 3;

    var test = 0;

    for (let i = 0; i < len; i++) {

        if (arr[1] == (arr[0] + 1) || arr[2] == (arr[1] + 1) || arr[2] == (arr[0] + arr[1])) {
            test += 1;
        } else {
            test = 0;
        }
        arr.splice(0, 3)
    }

    return (test);
};
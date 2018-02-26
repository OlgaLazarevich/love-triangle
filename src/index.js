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




    for (let i = 0, count = 0; i < preferences.length; i++) {

        let first = i,
            second = preferences[first] - 1,
            third = preferences[second] - 1;



        if (preferences[third] == (preferences.indexOf(preferences[first, i]) + 1) &&

            preferences[third] == i + 1 && preferences[second] != i + 1 &&
            preferences[first] != i + 1
            //            && 

        ) {


            count += 1;

        } else {}

        delete preferences[first];

        var countt = count;


    }

    return (countt);
};
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let item of s) {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            console.log(item);
        }
    }

    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    for (let i in s) {
        let item = s[i];
        for (let i in consonants) {
            if (item === consonants[i]) {
                console.log(item);
            }
        }
    }
}

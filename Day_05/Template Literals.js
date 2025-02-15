/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];

    let s1 = (perimeter + Math.sqrt(perimeter * perimeter - (16 * area))) / 4;
    let s2 = (perimeter - Math.sqrt(perimeter * perimeter - (16 * area))) / 4;

    let array = [s1, s2];
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
}
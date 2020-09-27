function getMaxLessThanK(n, k) {
    let max = -1;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let result = i & j;
            if (result > max && result < k) {
                max = result;
            }
        }
    }
    return max;
}
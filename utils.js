export function quizScore(num) {
    if (num > 2) {
        return 'Great Job!';
    }
    return 'You should study a bit more!';

}

export function resultsAsPercentage(results) {
    return ((results / 3) * 100).toFixed(0) + '%';
}

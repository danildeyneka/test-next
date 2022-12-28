export const getNounDeclension = (num: number, wordsArr: Array<string>): string => {
    const value = num % 10
    if (value > 10 && value < 20) return wordsArr[2]
    if (value > 1 && value < 5) return wordsArr[1]
    if (value === 1) return wordsArr[0]
    return wordsArr[2]
}
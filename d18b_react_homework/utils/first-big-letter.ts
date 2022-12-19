export const capitalLetter = (expression: string) => {
    return [...expression].map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('');
}
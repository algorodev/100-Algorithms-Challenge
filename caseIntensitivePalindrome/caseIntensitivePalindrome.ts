function isCaseIntensitivePalindrome(inputString: string): boolean {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('');
    return originalLowerCase === reversedWord;
}

console.log(isCaseIntensitivePalindrome("aabaa")); // DEVUELVE TRUE
console.log(isCaseIntensitivePalindrome("ababa")); // DEVUELVE TRUE
console.log(isCaseIntensitivePalindrome("acaba")); // DEVUELVE FALSE
console.log(isCaseIntensitivePalindrome("abaca")); // DEVUELVE FALSE

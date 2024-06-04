function isValid(inputString) {
    let stack = [];

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of inputString) {
        if (bracketMap[char]) {
  
            let topElement = stack.length ? stack.pop() : '#';
            
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else { 
            stack.push(char);
        }
    }
  
    return stack.length === 0;
}
const testString = "()";
console.log(isValid(testString));  

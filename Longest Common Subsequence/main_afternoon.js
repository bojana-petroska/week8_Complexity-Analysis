// Task 2: Find and Display All Common Subsequences
// Objective: Create a web application that takes two input strings from the user and
// displays all common subsequences of a certain length.
// Explanation:
// 1. HTML: Create a form to input two strings, an input field for the desired
// subsequence length, and a button to trigger the calculation.
// 2. JavaScript: Write a function to find and display all common subsequences of
// the given length.

const allLongestCommonSubsequences = (str1, str2) => {
    const horizontal = str1.length;
    const vertical = str2.length;

    const commonCheckUp = [...Array(horizontal + 1)].map(() => Array(vertical + 1).fill(''));

    for (let i = 1; i <= horizontal; i++) {
        for (let j = 1; j <= vertical; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                commonCheckUp[i][j] = commonCheckUp[i - 1][j - 1] + str1[i - 1]
            } else {
                commonCheckUp[i][j] = commonCheckUp[i - 1][j].length > commonCheckUp[i][j - 1].length ? commonCheckUp[i - 1][j] : commonCheckUp[i][j - 1];
            }
        }
    }
    
    console.log(commonCheckUp)
    return commonCheckUp[horizontal][vertical];
}

const calculateLCS = () => {
    const str1 = document.getElementById('str1').value;
    const str2 = document.getElementById('str2').value;
    const result = allLongestCommonSubsequences(str1,str2);
    document.getElementById('output').innerText = result;
}


console.log(allLongestCommonSubsequences('hello', 'llowr'))
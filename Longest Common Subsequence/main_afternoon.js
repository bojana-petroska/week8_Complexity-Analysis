
// d. Use a recursive function or backtracking to find all subsequences of the desired length from the dp array.
// e. Return the list of common subsequences of the given length.

const longestCommonSubsequences = (str1, str2) => {
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
    
    //console.log(commonCheckUp);
    return commonCheckUp;
}

// find all the common subsequences that have length => 3
const allLongCommonSubsequences = (str1, str2, minLength) => {
    const dp = longestCommonSubsequences(str1, str2);
    const result = new Set();

    const backtrack = (i, j, lcs) => {
        if (lcs.length >= minLength) result.add(lcs);
        if (i === 0 || j === 0) return;

        if (str1[i - 1] === str2[j - 1]) {
            backtrack(i - 1, j - 1, str1[i - 1] + lcs)
        } else {
            if (dp[i - 1][j].length >= dp[i][j - 1].length) {
                backtrack(i - 1, j, lcs)
            }
            if (dp[i][j - 1].length >= dp[i - 1][j].length) {
                backtrack(i, j - 1, lcs)
            }
        }
    }

    backtrack(str1.length, str2.length, '');
    console.log(result);
    return Array.from(result);
}

const calculateLCS = () => {
    const str1 = document.getElementById('str1').value;
    const str2 = document.getElementById('str2').value;
    const result = allLongCommonSubsequences(str1,str2, 3);
    document.getElementById('output').innerText = result;
}

//console.log(longestCommonSubsequences('hello', 'llowr'));




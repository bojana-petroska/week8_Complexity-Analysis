const longestCommonSubsequence = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D Array with size of (m+1 & n+1) and assign it to 0
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array - bottom up manner
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                console.log(`I find a match at index ${i - 1} of str1 and ${j - 1} of str2 char = ${str1[i - 1]}`);
                console.log(`Max Value: ${dp[i][j]}`)
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    //The length of the LCS is stored in dp[m][n]
    console.log(dp);
    return dp[m][n];
}

const longestCommonSubsequenceString = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D Array with size of (m+1 & n+1) and assign it to 0
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(''));

    // Build the dp array - bottom up manner
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                console.log(`I find a match at index ${i - 1} of str1 and ${j - 1} of str2 char = ${str1[i - 1]}`);
                console.log(`Current String: ${dp[i][j]}`)
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    //The length of the LCS is stored in dp[m][n]
    console.log(dp);
    return dp[m][n];
}


const calculateLCS = () => {
    const str1 = document.getElementById('str1').value;
    const str2 = document.getElementById('str2').value;
    const result = longestCommonSubsequence(str1,str2);
    const result1 = longestCommonSubsequenceString(str1, str2);
    document.getElementById('output').innerText = result1;
}

//console.log(longestCommonSubsequence('abcd', 'acd'));

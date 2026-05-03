let num = []
for (let i = 0; i < 49; i++) {
    num.push(i);
}

function shuffle(num) {
    const n = num.length;
    for (let i = 0; i < n; i++) {
        const rand = Math.floor(Math.random() * (n - i)) + i;
        [num[i], num[rand]] = [num[rand], num[i]];
    }
}

shuffle(num);
let winningNumber = num.slice(0, 6).sort((a, b) => a - b);

winningNumber.sort((a, b) => a - b);

console.log("今日大樂透開獎號碼為:" + winningNumber);
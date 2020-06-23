var dict = {}

function withMemoization(n) {
    if (dict[n] !== undefined) {
        return dict[n];
    }
    if (n == 1) {
        return 1
    }
    let first = withMemoization(n - 1)
    let second = withMemoization(n - 1)
    dict[n] = first + second
    return dict[n]
}

function nonMemoized(n) {
    if (n <= 1) {
        return 1
    }
    return nonMemoized(n - 1) + nonMemoized(n - 2)
}

let size = 30

let startTime = new Date().getTime()

for (let i = 1; i <= size; i++) {
    console.log(withMemoization(i))
}

console.log(`Memoization took: ${new Date().getTime() - startTime}`)

startTime = new Date().getTime()

for (let i = 1; i <= size; i++) {
    console.log(nonMemoized(i))
}

console.log(`Non memoized called took: ${new Date().getTime()-startTime}`)


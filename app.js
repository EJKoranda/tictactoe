let board = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
]
while (true) {
    let input = prompt("What would you like to do");
    if (input === "new") {
        let row = parseInt(prompt("Input the row to access"));
        let column = parseInt(prompt("Now please enter the column to access"));
        newValue = prompt("Now enter what you would like to input in that column");
        board[row][column] = newValue;
        console.log(`Your board was succesfully edited at row: ${row} and column: ${column}`);
    }
    if (input === "display") {
        console.log("Your board currently looks like this");
        console.log("--------------------------------------")
        for (let i = 0; i < board.length; i++) {
            console.log(` ${i}: ${board[i]}`);
        }
        console.log("--------------------------------------")
    }
    if (input === "quit") {
        console.log("quit");
        break;
    }
}
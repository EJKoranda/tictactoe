let board = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
]
while (true) {
    let input = prompt("What would you like to do");

    if (input === "new") {
        let row = prompt("Input the row to access");
        while (parseInt(row) > board.length - 1 || row.trim() === "") {
            row = prompt("Please input your row choice with respects to the borders")
        }
        let column = prompt("Now please enter the column to access");
        while (parseInt(column) > board.length - 1 || column.trim() === "") {
            column = prompt("Please input your column choice with respects to the borders")
        }
        let newValue = prompt("Now enter what you would like to input in that column");
        board[parseInt(row)][parseInt(column)] = newValue;
        console.log(`Your board was succesfully edited at row: ${row} and column: ${column}`);
    }
    if (input === "d" || input === "display") {
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
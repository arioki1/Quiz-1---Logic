let baris = 5;

for (let i = baris; i >= 1; i--) {
    let output = [];
    for (let j = 0; j < i; j++) {
        output.push('* ')
    }
    console.log(output.join(''))
}
let baris = 5;
for (let i = 1; i <= baris; i++) {
    let output = []
    for (let j = 0; j < i; j++) {
        output.push('* ')
    }
    console.log(output.join(''))

}
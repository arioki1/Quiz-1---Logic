








const count_vowels =  (string) =>{
    let jumlah = 0;

    let vokal = ['a','i','u','e','o'];
    string = string.split('');

    string.forEach((value)=>{
        let cek = vokal.find((data) => data === value);
        if (cek){
            jumlah = jumlah+1
        }
    });
    console.log(`Jumlah huruf vokal pada kata ${string.join('')} adalah : ${jumlah}`)
};

count_vowels('programmer');



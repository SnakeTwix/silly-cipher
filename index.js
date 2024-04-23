const rows = [
    "йцукенгшщзхъ",
    "фывапролджэ\\",
    "ячсмитьбю."
];

const converterMap = {" ": " "};
const decipherMap = {" ": " "};

for (let row of rows) {
    for (let i = 0; i < row.length; i++) {
        if (i === row.length - 1) {
            decipherMap[row[i]] = row[i];
            decipherMap[row[i].toUpperCase()] = row[i].toUpperCase();
            converterMap[row[i]] = row[i];
            converterMap[row[i].toUpperCase()] = row[i].toUpperCase();
            continue
        }

        decipherMap[row[i + 1]] = row[i];
        decipherMap[row[i + 1].toUpperCase()] = row[i].toUpperCase();
        converterMap[row[i]] = row[i + 1]; 
        converterMap[row[i].toUpperCase()] = row[i + 1].toUpperCase(); 
    }
}

function convert(string) {
    return [...string].map((a) => converterMap[a]).join("")
}


function decipher(string) {
    return [...string].map((a) => decipherMap[a]).join("")
}

const converterInputArea = document.getElementById("converter_input_area");
const converterOutputArea = document.getElementById("converter_output_area");
const converterBtn = document.getElementById('converter_btn')

converterInputArea.addEventListener("input", e => {
    converterOutputArea.innerText = convert(converterInputArea.value)
})

converterBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(convert(converterInputArea.value))
})

const decipherInputArea = document.getElementById("decipher_input_area");
const decipherOutputArea = document.getElementById("decipher_output_area");
const decipherBtn = document.getElementById('decipher_btn')


decipherInputArea.addEventListener("input", e => {
    decipherOutputArea.innerText = decipher(decipherInputArea.value)
})

decipherBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(decipher(decipherInputArea.value))
})
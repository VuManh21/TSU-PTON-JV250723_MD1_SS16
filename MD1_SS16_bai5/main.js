let input = prompt("hay nhap chuoi cua ban");

function chuoidoixung(arr) {
    let chuoidoixung = arr.toLowerCase();

    let reversedoixung = chuoidoixung.split("").reverse().join("");

    return chuoidoixung===reversedoixung;
}

if (chuoidoixung(input)) {
    console.log(`${input} la chuoi doi xung`);
    alert(`${input} la chuoi doi xung`);
}else {
     console.log(`${input} khong la chuoi doi xung`);
    alert(`${input} khong la chuoi doi xung`);
}

let i = 1;
console.log("BREAK AT 4 (EXIT)")

while (i <= 10) {

    if (i === 4) {
        break;
    }

    console.log(i);

    i++;
}
console.log("CONTINUE TO 3 (SKIP)")

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);

}
let color = "red";

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


let choice = Number(
    prompt("Enter a number between 1 and 3:")
);

switch (choice) {

    case 1:
        alert("You selected Option 1");
        break;

    case 2:
        alert("You selected Option 2");
        break;

    case 3:
        alert("You selected Option 3");
        break;

    default:
        alert("Invalid choice");
}
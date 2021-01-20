const friends = ["Chelsea", "Rebecca", "Olivia", "Courtney", "jeremy"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i] + ":");

  for (let j = 99; j >= 1; j--) {
    if (j === 2) {
      console.log(
        "2 lines of code in the file, 2 lines of code;" +
          friends[i] +
          "strike one out, close it all out"
      );
    } else if (j === 1) {
      console.log(
        "1 line, 1 line of code; " +
          friends[i] +
          "strike one out, close it all out"
      );
    } else {
      console.log(
        j +
          "lines of code in the file, " +
          j +
          "lines of code; " +
          friends[i] +
          "strike one out, clear it all out" +
          (j = 1) +
          "lines of code in the file"
      );
    }
  }
}

// } else { if j = "j";
// }

// if (j < 99) {
//   console.log("");
//   console.log(j + " " + lines + " of code in the file");
// }
// console.log(j + " " + lines + " of code.");
// console.log(friends);
// console.log("Strikes one out");
// console.log("clears it all out.");
// console.log(j + " " + lines + " of code.");
// if (j == 1) console.log("No lines of code in the file");
// console.log(friends);

const input = document.getElementById("decimalInput");
const p = document.getElementById("binaryResult");

const convertToBinary = () => {
  let binary = "";

  for (let i = input.value; i > 0; i = Math.floor(i / 2)) {
    const rest = i % 2;
    binary = rest.toString() + binary;

    p.innerText = binary;
  }
};

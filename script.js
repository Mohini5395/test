const pincone = document.getElementById("inputBox");
const button = document.getElementById("lookUp");


async function fetchAPI(PINCODE) {
    const url = `https://api.postalpincode.in/pincode/${PINCODE}>`
    const result = await fetch(url).then((res) => res.json());
    console.log(result);
}
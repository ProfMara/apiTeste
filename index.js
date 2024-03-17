document.querySelector(".search").addEventListener("click", getAllUsers);
document.querySelector(".insert").addEventListener("click", addNewUser);


async function getAllUsers() {
  try {
    const { data } = await axios.get("https://profmara.github.io/apiTeste/db.json");
    console.log("usuarios", data);
  } catch (error) {
    console.log("erro", error);
  }
}

async function addNewUser() {
  var user = document.getElementById("user").value;

  try {
    await axios.post("https://profmara.github.io/apiTeste/db.json", { name: user });
  } catch (error) {
    console.log("erro");
  }
}

const button = document.getElementById("send");
const section = document.getElementById("mostrar");

try {
  const response = await fetch("http://localhost:3003/users");

  if (response.ok) {
    const text = await response.json();
    console.log(text);
    section.innerHTML = `<h1>${text}</h1>`;
  }
} catch (error) {
  console.log("Erro ao fazer a requisição", error);
}

// button.addEventListener("click", async () => {
//   try {
//     const response = await fetch("http://localhost:3003/users");

//     if (response.ok) {
//       const text = response.json();
//       console.log(text);
//     }
//   } catch (error) {
//     console.log("Erro ao fazer a requisição", error);
//   }
// });

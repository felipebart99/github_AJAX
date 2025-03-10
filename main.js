document.addEventListener("DOMContentLoaded", async function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  try {
    const response = await fetch("https://api.github.com/users/felipebart99");
    if (!response.ok) {
      throw new Error("Falha ao carregar os dados da API");
    }

    const json = await response.json();

    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    followingElement.innerText = json.following;
    followersElement.innerText = json.followers;
    reposElement.innerText = json.public_repos;
    linkElement.href = json.html_url;
  } catch (error) {
    console.error("Erro ao buscar os dados do GitHub:", error);

    nameElement.innerText = "Erro ao carregar os dados";
    usernameElement.innerText = "";
    followersElement.innerText = "";
    followingElement.innerText = "";
    reposElement.innerText = "";
    linkElement.href = "#";
  }
});

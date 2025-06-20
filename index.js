document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects");

  fetch("https://api.github.com/users/SheylaDiaz/repos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(repo => {
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
          <p>
            <a href="${repo.html_url}" target="_blank">
              ${repo.name}
            </a>
          </p>
        `;
        container.appendChild(item);
      });
    })
    .catch(error => {
      container.innerHTML = "<p>Failed to load repositories. Please try again later.</p>";
      console.error("GitHub API fetch error:", error);
    });
});

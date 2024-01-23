const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const list = document.querySelector("ol");

if (!highScores.length) {
  list.innerHTML = "<li>No scores have been recorded</li>";
} else {
  list.innerHTML = highScores.map((score, index) => {
    return `
    <li>
        <span>${index + 1}</span>
        <p>${score.name}</p>
        <span>${score.score}</span>
    </li>
  `;
  }
  ).join("");
}
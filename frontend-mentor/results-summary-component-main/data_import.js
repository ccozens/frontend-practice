async function getData() {
  // get data
  let data;
  const res = await fetch('./data.json');
  data = await res.json();


  data.forEach(
    (test) =>
      (document.querySelector(
        '.' + test.category.toLowerCase()
      ).innerHTML = `<p class="summaryItem">
    <img
      src=${test.icon}
      alt="Reaction score logo, a lightning bolt"
    />
    ${test.category}
  </p>
  <div class="summaryScore">
    <p class="score">
      <strong>${test.score}</strong> <span class="outOf"> / 100</span>
    </p>
  </div>`)
  );
}

getData();
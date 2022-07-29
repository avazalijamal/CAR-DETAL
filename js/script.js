window.addEventListener("load", () => {
  //datani sec
  const myData = data[0];

  // adi elave et
  const name = document.createElement("h1");
  name.classList.add("name");
  name.innerText = myData.name;
  document.body.appendChild(name);

  // sekili elave et

  const img = document.createElement("div");
  img.classList.add("img");
  img.innerHTML = myData.img;
  document.body.appendChild(img);

  // sekili sec
  const velosiped = document.getElementById(myData.domId);
  const myCord = myData.cord;
  velosiped.style.width = "300px";
  velosiped.style.height = "300px";

  // mesaji elave et
  const mesaj = document.createElement("div");
  mesaj.classList.add("mesaj");
  document.body.appendChild(mesaj);

  // detallari sec ve uzerinde emeliyyat apar
  for (let cord of myCord) {
    const dom = document.getElementById(cord.domId);

    if (cord.say < 5) dom.style.fill = "#ff0000";

    dom.addEventListener("mouseover", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      document.body.removeChild(mesaj);
      mesaj.classList.add("show");
      mesaj.style.top = `${y}px`;
      mesaj.style.left = `${x}px`;
      mesaj.innerHTML = `${cord.name}: ${cord.count}`;
      document.body.appendChild(mesaj);
    });
  }
});

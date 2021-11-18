function setFlex() {
  const ul = document.getElementsByTagName("ul")[0];
  ul.setAttribute("class", "vierekkain");
  const lis = ul.children;
  for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute("class", "no-disc");
  }
}

function setGreyBackground() {
  const uls = document.getElementsByTagName("ul");
  for (var i = 1; i < uls.length; i++) {
    uls[i].setAttribute("class", "grey");
  }
  const firstTable = document.getElementsByTagName("table")[0];
  firstTable.setAttribute("class", "grey-even");
  const secondTable = document.getElementsByTagName("table")[1];
  secondTable.setAttribute("class", "grey-odd");
}

function styleLinks() {
  const links = document.links;
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute("class", "dotted-links");
    if (links[i].href.includes(".pdf")) {
      links[i].insertAdjacentHTML(
        "afterend",
        '  <i class="fas fa-file-pdf"></i>'
      );
    } else if (links[i].href.includes("mailto")) {
      const text =
        ' <i class="fas fa-envelope"></i> <i class="fas fa-external-link-alt"></i> ';
      links[i].insertAdjacentHTML("beforebegin", text);
    } else if (links[i].href.slice(-4).includes(".")) {
      const text = '<i class="fas fa-external-link-alt"></i> ';
      links[i].insertAdjacentHTML("beforebegin", text);
    }
  }
}

function setNiceStuff() {
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("class", "new-body");
  const article = document.getElementsByTagName("article")[0];
  article.setAttribute("class", "nice-box");
  const btn = document.getElementById("btn");
  btn.setAttribute("class", "nice-btn");
  const h1 = document.getElementsByTagName("h1")[0];
  h1.setAttribute("class", "nice-heading");
  h1.style.fontSize = "3rem";
  const h2 = document.getElementsByTagName("h2");
  for (var i = 0; i < h2.length; i++) {
    h2[i].setAttribute("class", "nice-heading");
  }
}

function stylePage() {
  setFlex();
  setGreyBackground();
  styleLinks();
  setNiceStuff();
}

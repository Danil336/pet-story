let burger_header = document.getElementById("burger_header")!;
let header_menu = document.querySelector(".header_menu")!;
let logo_header = document.querySelector(".logo_container_header")!;
let header_logo_text = document.getElementById("title_header_logo")!;
let body = document.querySelector("body")!;

burger_header.addEventListener("click", () => {
  burger_header.classList.toggle("active");
  header_menu.classList.toggle("active");
  body.classList.toggle("lock");
  header_logo_text.classList.toggle("title_header_logo");
  burger_header.classList.toggle("burger_header");
  burger_header.classList.toggle("header_burger_adaptive");
  logo_header.classList.toggle("logo_container_header_adaptive");
  header_logo_text.classList.toggle("logo_title_header_adaptive");
});
document.addEventListener("click", (event) => {
  if (event.target?.classList.contains("link")) {
    header_menu.classList.remove("active");
    body.classList.remove("lock");
    burger_header.classList.remove("active");
    burger_header.classList.remove("burger_header");
    logo_header.classList.remove("logo_container_header_adaptive");
    header_logo_text.classList.remove("logo_title_header_adaptive");
    burger_header.classList.remove("header_burger_adaptive");
  }
});

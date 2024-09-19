// rhis function is for download the resume pdf
function handleResume() {
  var downloadUrl = "./assets/FrontendResume7.pdf";
  var a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "resume.pdf";
  a.click();
  a.remove();
}
// this is for load more functionality
const menuToggle = document.querySelector(".ham-menu");
const navLinks = document.querySelector(".off-screen-menu");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

let obj = [
  {
    project:
      "At the heart of this user experience enhancement is the integration of a sophisticated virtual makeup feature. This feature allows users to digitally experiment with various cosmetic options in real-time. Utilizing computer vision and machine learning technologies, the system enables users to effortlessly adjust their hair, lip, and eye colors with high precision. This interactive tool not only helps users visualize and personalize their desired look but also empowers them to make informed decisions before committing to a physical makeover.",
  },
  {
    project:
      "Interactive elements and smooth navigation enhance the visitor experience, while the use of advanced web technologies and design principles demonstrates my proficiency in front-end development and user interface design.",
  },
  {
    project:
      "The gallery incorporates advanced search functionality, allowing users to quickly find images by keywords, categories, or tags. Users can effortlessly view and download images with just a few clicks, ensuring a seamless experience. ",
  },
  {
    project:
      " They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data.",
  },
];

const description = document.querySelectorAll(".load_more");
description.forEach((btn) => {
  btn.addEventListener("click", showData);
});
description.forEach((btn) => {
  btn.innerText = "Load More";
  btn.addEventListener("click", () => {
    if (btn.innerText === "Load More") {
      btn.innerText = "Show Less";
    } else {
      btn.innerText = "Load More";
    }
  });
});
function showData(e) {
  description.innerText = " Less";
  let des = e.target.previousElementSibling;
  des.classList.toggle("pic");
  // console.log(e);
}

obj.forEach((para, index) => {
  let paragraph = document.createElement("p");
  paragraph.className = "desc";
  // console.log(paragraph);

  paragraph.innerText = para.project;

  var test = description[index].insertAdjacentElement(
    "beforebegin",
    paragraph.cloneNode(true)
  );
});
function inner() {
  description.innerText = "less";
}

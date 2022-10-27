
const linksContainer = document.querySelector(".links-container");

const data = {
  name: "Fernando Dorantes",
  nickname: "@fernando.cst03",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "",
    },
  ],
  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Colombia",
};

/* 
<div class="links">
  <a href="">Blog</a>
  <i>📓</i>
</div> */

const createLinks = (data) => {
  let view = `
  ${data.map((element) => {
    return `
    <div class="links">
      <a href="${element.url}">${element.name}</a>
      <i>${element.emoji}</i>
    </div>
    `;
  }).slice(0,2).join(" ")}
  `;
  linksContainer.innerHTML = view;
};

createLinks(data.links);
  

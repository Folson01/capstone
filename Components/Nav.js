import html from "html-literal";
export default Links => html`
  <nav>
    <i class="Nav"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(
        Link =>
          `<li><a href="/${Link.title}" title="${Link.title}" data-navigo>${Link.text}</a></li>`
      ).join("")}
    </ul>
  </nav>
`;

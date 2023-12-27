import html from "html-literal";

export default state => html`
  <div>
    <p class="pets">
      Please contact any owner if you spot their loved one.
    </p>
    ${state.pet}
  </div>
`;

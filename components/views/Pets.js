import html from "html-literal";

export default state => html`
  <table id="Lostpets">
    <tr>
      <th>PetName</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Message</th>
      <th>Approachable</th>
    </tr>
      ${state.pets
        .map(pet => {
          return `<tr><td>${pet.PetName}</td><td>${pet.Email}</td><td>${pet.Phone}
        </td><td>${pet.msg}</td><td>${pet.Approachable}</td></tr>`;
        })
        .join("")}
    </tr>
  </table>
`;

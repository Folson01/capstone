import html from "html-literal";

export default state => html`
  <table id="Lostpets">
    <!-- <tr>
      <th>PetName</th>
      <th>Email</th>
      <th>Phone</th>
      <th>msg</th>
      <th>Approachable</th>
    </tr> -->
    ${state.pets
      .map(pet => {
        return `<<tr><td>${pet.PetName}<tr><td>${pet.Email}<tr><td>${pet.Phone}
        <tr><td>${pet.msg}<tr><td>${pet.Approachable}<tr><td>`;
      })
      .join("")}
    ;
  </table>
`;

import html from "html-literal";
export default () => html`
<form action="" method="POST">
    <label for="PetName">PetName:</label>
    <input type="text" name="name" id="name" placeholder="Pets Name" required />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Example@place.com"
    />

    <label for="fone">Phone:</label>
    <input type="tel" name="CellPhone" id="Cellp+Phone" placeholder="999-999-9991" />

    <div>
      <label for="msg">Enter your message:</label>
      <textarea name="msg" id="msg" cols="40" rows="20"></textarea>
      <fieldset>
        <legend>Is your pet approachable?:</legend>

        <div>
          <input type="radio" id="keep away" name="pet" value="Keep away" />
          <label for="keep away">Keep away</label>
          <input type="radio" id="approachable" name="pet" />
          <label for="Be safe">Approach with caution</label>
          <input type="submit" value="submit" />
        </div>
    </div>
`;

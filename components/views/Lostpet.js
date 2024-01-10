import html from "html-literal";
export default state => html`;

<form action="" method="POST">
    <label>PetName:</label>
    <input type="text" name="PetName" placeholder="Pets Name" required />

    <label for="Email" >Email:</label>
    <input name="Email"
      placeholder="Example@place.com"
    />

    <label for = "Phone" >Phone:</label>
    <input name="Phone" placeholder="999-999-9991" />

    <div>
      <label  for="msg">Tell us about your lost one:</label>
      <textarea name="msg" id="msg" cols="40" rows="20"></textarea>
      <fieldset>
        <legend>Is your pet approachable?:</legend>

        <div>
          <input type="radio"  name="Approachable"value="Keep away" />
          <label for="Keep away">Keep away</label>
          <input type="radio" id="Approachable" name="Approachable" value="Approachable"/>
          <label for="Approachable">Approach with caution</label>
        </div>
    </div>
    <input name="submit" type="submit" value="submit" />
</form>
`;

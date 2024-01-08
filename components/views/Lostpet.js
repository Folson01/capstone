import html from "html-literal";
export default state => html`;

<form action="" method="POST">
    <label>PetName:</label>
    <input type="text" id="name" placeholder="Pets Name" required />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Example@place.com"
    />

    <label>Phone:</label>
    <input id="Cellp+Phone" placeholder="999-999-9991" />

    <div>
      <label>Tell us about your lost one:</label>
      <textarea id="msg" cols="40" rows="20"></textarea>
      <fieldset>
        <legend>Is your pet approachable?:</legend>

        <div>
          <input type="radio" eid="keep away"value="Keep away" />
          <label>Keep away</label>
          <input type="radio" id="approachable" name="pet" />
          <label for="Be safe">Approach with caution</label>
          <input type="submit" value="submit" />
        </div>
    </div>

`;

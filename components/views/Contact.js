import html from "html-literal";
export default () => html`

<h1>
  Feel Free to Contact us with any questions you may have about our site or if you
  have any tips that can make this process easier!
  </h1>
  <ul>
  <li>1800-Spotted</li>
  <li>Instagram @Spotted</li>
  <li>spotted@Gmail.com</li>
  </ul>
  <form
  action="https://formspree.io/f/mayrwwdv"
  method="POST"
    >
<label for="email">Your email:</label>
<input type="email" name="email"></label>
<label for="message">Your message:</label>
<textarea name="message"></textarea>
<input type="submit" value="submit">`;

import html from "html-literal";
import Puppy from "../../assest/puppy.jpg";
export default state => html`
  <img src=${Puppy} alt"dog" class=dog />
  <div class="homePage">
    <p class="Home">
      Here at spotted we understand that sometimes pets lose their way. Our goal
      is to reunite families with their lost loved one. please take your time
      and give us as much information as possible about your lost one. Were here
      to take as much stress out of this process as we can. We hope to help you
      find your lost one soon!
    </p>
  </div>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;

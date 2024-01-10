import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
  afterrender(state);
}
function afterrender(state) {
  if (state.view === "Lostpet") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputs = event.target.elements;
      console.log("Input Element List", inputs);
      const Approachable = [];
      for (let input of inputs.Approachable) {
        if (input.checked) {
          Approachable.push(input.value);
        }
      }
      console.log(Approachable);
      const requestData = {
        PetName: inputs.PetName.value,
        Email: inputs.Email.value,
        Phone: inputs.Phone.value,
        msg: inputs.msg.value,
        Approachable: Approachable[0]
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.LOST_PET_URL}/Pets`, requestData)
        .then(response => {
          store.Pets.pets.push(response.data);
          router.navigate("/Pets");
        })
        .catch(error => {
          console.log("Did not spot pet", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=katy`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

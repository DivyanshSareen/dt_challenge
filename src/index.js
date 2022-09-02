import data from "./data.json" assert { type: "json" };
import assetGrid from "./components/AssetGrid.js";
import JourneyList from "./components/JourneyList.js";

// rendering asset grid
// const asset_grid = document.getElementsByClassName("asset-grid")[0];
// asset_grid.innerHTML = assetGrid(data);

// rendering journey board list
const journey_list = document.getElementsByClassName("journey-list");
journey_list[0].innerHTML = JourneyList(data);

// journey board
const journey_option = document.getElementsByClassName("journey-option");
const journey_board = document.getElementsByClassName("journey-board");

console.log(journey_option);
journey_option[0].addEventListener("click", () => {
  journey_board[1].classList.remove("hidden");
  journey_board[0].classList.add("hidden");
});
journey_option[1].addEventListener("click", () => {
  journey_board[0].classList.remove("hidden");
  journey_board[1].classList.add("hidden");
});

// asset description open/close
const asset_expand = document.querySelectorAll(".asset-expand");
const asset_description = document.querySelectorAll(".asset-description");

for (let i = 0; i < asset_expand.length; i++) {
  asset_expand[i].addEventListener("click", () => {
    asset_expand[i].children[0].src = asset_description[i].classList.contains(
      "hidden"
    )
      ? "src/assets/angle-up-solid.svg"
      : "src/assets/angle-down-solid.svg";
    asset_description[i].classList.contains("hidden")
      ? asset_description[i].classList.remove("hidden")
      : asset_description[i].classList.add("hidden");
  });
}

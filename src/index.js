import assetGrid from "./components/AssetGrid.js";

const asset_grid = document.getElementsByClassName("asset-grid")[0];

asset_grid.innerHTML = assetGrid();

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

import data from "../data.json" assert { type: "json" };
import Asset from "./Asset.js";
const AssetGrid = () => {
  let arr = "";
  for (let i = 0; i < 9; i++) {
    arr += Asset(data.tasks[0].assets[i]);
  }
  return arr;
};

export default AssetGrid;

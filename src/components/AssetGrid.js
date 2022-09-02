import Asset from "./Asset.js";
const AssetGrid = (data) => {
  let arr = "";
  for (let i = 0; i < 9; i++) {
    arr += Asset(data.tasks[0].assets[i]);
  }
  return arr;
};

export default AssetGrid;

const AssetGrid = () => {
  let arr = "";
  for (let i = 0; i < 7; i++) {
    arr += `<div class="asset">
                <h3 class="asset-head">Task Heading 1</h3>
                <div class="asset-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa distinctio
                    illo
                    aut dolor odio sit voluptates, consequuntur cupiditate ab possimus harum tempore assumenda
                    repellendus.
                    Veritatis velit porro minima error culpa?</div>
                <div class="asset-expand"><img src="./src/assets/angle-down-solid.svg"></div>
            </div>`;
  }
  return arr;
};

export default AssetGrid;

const ReflectionAsset = (data) => {
  return ` <div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="asset-content">${data.display_asset_reflection}
                </div>
                <div class="asset-description hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default ReflectionAsset;

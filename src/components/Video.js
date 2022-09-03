const Video = () => {
  return `<div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="drive-embed youtube">
                    <iframe width="auto" src="https://giphy.com/embed/IzjhI7ggjDlEnMxZMu" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div class="asset-description hidden">
                    ${data.asset_description}
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default Video;

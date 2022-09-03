const Document = () => {
  return `<div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="drive-embed doc">
                    <iframe src="https://drive.google.com/file/d/1Pxw83bTKE3KkOyYnwm1u6DSVjntSrNTp/preview"
                        frameborder="0"></iframe>
                </div>
                <div class="asset-description hidden">
                    ${data.asset_description}
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default Document;

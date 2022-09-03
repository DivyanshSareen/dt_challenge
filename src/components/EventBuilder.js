const EventBuilder = () => {
  return `<div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="asset-content">
                    <form class="event-builder">
                        <div class="thread-head">
                            <img src="./src/assets/angle-up-solid.svg">
                            <span>Introduction</span>
                        </div>
                        <section class="sub-threads">
                            <div class="sub-thread">
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                        </section>
                        <div class="thread-head">
                            <img src="./src/assets/angle-up-solid.svg">
                            <span>Thread A</span>
                        </div>
                        <section class="sub-threads">
                            <div class="sub-thread">
                                <h6>Example 1</h6>
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                            <button class="reflection-button btn-small">
                                + Example
                            </button>
                            <div class="sub-thread">
                                <h6>Argument for Thread A</h6>
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                        </section>
                        <button class="reflection-button">
                            + New Thread
                        </button>
                        <div class="thread-head">
                            <img src="./src/assets/angle-up-solid.svg">
                            <span>Conclusion</span>
                        </div>
                        <section class="sub-threads">
                            <div class="sub-thread">
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                        </section>
                        <img class="reflection-button" src="./src/assets/save.png">
                    </form>
                </div>
                <div class="asset-description hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                </div>
                <div class="asset-expand">
                    <img src="./src/assets/angle-down-solid.svg">
                </div>
            </div>`;
};

export default EventBuilder;

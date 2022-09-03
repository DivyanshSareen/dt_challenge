const ThreadBuilder = () => {
  return ` <div class="asset">
                <h3 class="asset-head">${data.asset_title}</h3>
                <div class="asset-content">
                    <form class="thread-builder">
                        <div class="thread-head">
                            <img src="./src/assets/angle-up-solid.svg">
                            <span>Thread A</span>
                        </div>
                        <section class="sub-threads">
                            <div class="sub-thread">
                                <h6>Sub Thread 1</h6>
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                            <div class="sub-thread">
                                <h6>Sub Interpretation 1</h6>
                                <textarea placeholder="Enter Text Here"></textarea>
                            </div>
                        </section>
                        <div class="sub-thread-options">
                            <img src="./src/assets/bulb.png">
                            <img src="./src/assets/message.png">
                            <select>
                                <option disabled selected>
                                    Select Category
                                </option>
                            </select>
                            <select>
                                <option disabled selected>
                                    Select Process
                                </option>
                            </select>
                        </div>
                        <button class="reflection-button btn-small">
                            + Sub thread
                        </button>
                        <section class="thread-summary">
                            <h6>
                                Summary for Thread A
                            </h6>
                            <textarea placeholder="Enter Text Here"></textarea>
                        </section>
                        <section class="credit">
                            <img src="./src/assets/link.png">
                            Thread Credit
                            <img src="./src/assets/write.png">
                            <select>
                                <option disabled selected>
                                    Select Emotion
                                </option>
                            </select>
                        </section>
                        <button class="reflection-button">
                            + New Thread
                        </button>
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

export default ThreadBuilder;

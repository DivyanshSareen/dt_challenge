const JourneyList = (data) => {
  console.log(data.tasks[0].assets.length);
  let journeyList = `<li><div class="demo-head">${data.tasks[0].task_title}</div><ul>`;
  for (let i = 0; i < data.tasks[0].assets.length; i++) {
    journeyList += `<li>data.asset_title</li>`;
  }
  journeyList += `</ul>
            </li>`;
  console.log(journeyList);
  return journeyList;
};

export default JourneyList;

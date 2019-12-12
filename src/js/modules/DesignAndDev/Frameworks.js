import frameworks from '../../../data/frameworks';


class FrameWorks {
  constructor() {
    this.frame_works();
  }

  frame_works() {

    document.getElementById("content-frameworks").innerHTML = `
    <table id="frameworks" class="table table-striped table-borderless table-hover">
      <thead>
        <tr>
          <th class="th-icon" scope="col">Icon</th>
          <th class="th-desc" scope="col">Description</th>
          <th class="th-beginner" scope="col">B</th>
          <th class="th-advanced" scope="col">A</th>
          <th class="th-expert" scope="col">E</th>
          <th class="th-yrs" scope="col">Yrs</th>
          <th class="th-status" scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          ${frameworks.map( (frameWork) => {

            return `
              <tr>
              <th class="td-icon" scope="row">${frameWork.icon}</th>
              <td class="td-desc">${frameWork.desc}</td>
              <td class="td-beginner">${frameWork.beginner}</td>
              <td class="td-advanced">${frameWork.advanced}</td>
              <td class="td-expert">${frameWork.expert}</td>
              <td class="td-yrs">${frameWork.yrs}</td>
              <td class="td-status">${frameWork.status}</td>
              </tr>
            `
          } ).join('')}
        </tr>
      </tbody>
    </table>
    `
  }
}

export default FrameWorks;
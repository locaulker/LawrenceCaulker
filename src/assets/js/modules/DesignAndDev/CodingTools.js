import coding_Tools from '../../../../assets/data/codingTools';


class CodingTools {
  constructor() {
    this.codingTools();
  }

  codingTools() {

    document.getElementById("content-programming").innerHTML = `
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
          ${coding_Tools.map( (codingTools) => {

            return `
              <tr>
              <th class="td-icon" scope="row">${codingTools.icon}</th>
              <td class="td-desc">${codingTools.desc}</td>
              <td class="td-beginner">${codingTools.beginner}</td>
              <td class="td-advanced">${codingTools.advanced}</td>
              <td class="td-expert">${codingTools.expert}</td>
              <td class="td-yrs">${codingTools.yrs}</td>
              <td class="td-status">${codingTools.status}</td>
              </tr>
            `
          } ).join('')}
        </tr>
      </tbody>
    </table>
    `
  }
}

export default CodingTools;
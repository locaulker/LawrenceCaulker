import databaseTools from '../../../data/databaseTools';


class DatabaseTools {
  constructor() {
    this.dbTool();
  }

  dbTool() {

    document.getElementById("content-databases").innerHTML = `
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
          ${databaseTools.map( (databaseTool) => {

            return `
              <tr>
              <th class="td-icon" scope="row">${databaseTool.icon}</th>
              <td class="td-desc">${databaseTool.desc}</td>
              <td class="td-beginner">${databaseTool.beginner}</td>
              <td class="td-advanced">${databaseTool.advanced}</td>
              <td class="td-expert">${databaseTool.expert}</td>
              <td class="td-yrs">${databaseTool.yrs}</td>
              <td class="td-status">${databaseTool.status}</td>
              </tr>
            `
          } ).join('')}
        </tr>
      </tbody>
    </table>
    `
  }
}

export default DatabaseTools;
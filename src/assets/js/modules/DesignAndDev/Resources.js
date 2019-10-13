import resources from '../../../../assets/data/resources.json';


class ResourceTools {
  constructor() {
    this.resource_Tool();
  }

  resource_Tool() {

    document.getElementById("content-resources").innerHTML = `
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
          ${resources.map( (resourceTool) => {

            return `
              <tr>
              <th class="td-icon" scope="row">${resourceTool.icon}</th>
              <td class="td-desc">${resourceTool.desc}</td>
              <td class="td-beginner">${resourceTool.beginner}</td>
              <td class="td-advanced">${resourceTool.advanced}</td>
              <td class="td-expert">${resourceTool.expert}</td>
              <td class="td-yrs">${resourceTool.yrs}</td>
              <td class="td-status">${resourceTool.status}</td>
              </tr>
            `
          } ).join('')}
        </tr>
      </tbody>
    </table>
    `
  }
}

export default ResourceTools;
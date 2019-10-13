import acronyms from '../../../../assets/data/acronyms';


class Acronyms {
  constructor() {
    this.acroNyms();
  }

  acroNyms() {

    document.getElementById("content-acronyms").innerHTML = `
    <table id="frameworks" class="table table-striped table-borderless table-hover">
      <thead>
        <tr>
          <th class="th-acronym" scope="col">Acronym</th>
          <th class="th-desc" scope="col">Description</th>
          <th class="th-aware" scope="col">Aware</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          ${acronyms.map( (acronymDef) => {

            return `
              <tr>
              <th class="td-acronym" scope="row">${acronymDef.acronym}</th>
              <td class="td-desc">${acronymDef.desc}</td>
              <td class="td-aware">${acronymDef.aware}</td>
              </tr>
            `
          } ).join('')}
        </tr>
      </tbody>
    </table>
    `
  }
}

export default Acronyms;
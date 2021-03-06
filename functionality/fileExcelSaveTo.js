import CSVformatGet from './CSVformatGet.js';

function excelFileSaveTo(fileName) {
  const CSV = CSVformatGet();
  const uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
  const link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default excelFileSaveTo;
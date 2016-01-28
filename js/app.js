$(document).ready(function () {
  var table = null;
  var csvFormSection = $('#csvFormSection');
  var tryAgainBtn = $('#tryAgainBtn');
  var generateBtn = $('#generateBtn');
  var csvTextarea = $('#csvTextarea');
  var csvTableSection = $('#csvTableSection');
  var csvTable = $('#csvTable');
  var numberOfRecordsEl = $('#numberOfRecords');

  Dropzone.autoDiscover = false;
  var myDropzone = new Dropzone('#myDropzone', {
    autoProcessQueue: false
  });
  myDropzone.on('addedfile', function (file) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var reader = new FileReader();
      reader.onload = function (e) {
        buildCsvTable(reader.result);
      };
      reader.readAsText(file);
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  });

  csvFormSection.show();
  csvTableSection.hide();
  tryAgainBtn.hide();

  generateBtn.click(function () {
    buildCsvTable(csvTextarea.val());
  });

  tryAgainBtn.click(function () {
    toggleView();
    table.destroy();
    myDropzone.removeAllFiles(true);
  });

  function buildCsvTable (csv) {
    var results = Papa.parse(csv.trim());
    var columns = results.data[0].map(function (item) { return { title: item }; });
    var data = results.data.splice(1, results.data.length); 
    numberOfRecordsEl.html(data.length);

    csvTable.empty();
    table = csvTable.DataTable({
      paging: false,
      data: data,
      columns: columns,
      dom: "<'top'if>Show"
    });

    toggleView();
  }

  function toggleView () {
    csvFormSection.toggle();
    csvTableSection.toggle();
    tryAgainBtn.toggle();
  }
});

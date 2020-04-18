var s = "Date range : 01/01/2020-21/01/2020 \n" + 
"Started by Dr. Daskalakis b/c blood pressure not controlled \n" +
"Stopped by Dr. Daskalakis b/c allergic reaction"
var s2= "Started by Dr. Daskalakis b/c blood pressure not controlled"

google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var container = document.getElementById('timeline-tooltip');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'string', id: 'dummy bar label' });
        dataTable.addColumn({ type: 'string', role: 'tooltip' });
        dataTable.addColumn({ type: 'string', role: 'tooltip' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Washington', null, s,s2, new Date(1789, 3, 29), new Date(1797, 2, 3) ],
          [ 'Adams', null, 'John',s2, new Date(1797, 2, 3),  new Date(1801, 2, 3) ],
          [ 'Jefferson', null, 'Thomas',s2, new Date(1801, 2, 3),  new Date(1809, 2, 3) ]]);

        chart.draw(dataTable);
        }

function dropHandler(ev) {
    console.log('File(s) dropped');
          
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
    // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone'); 
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

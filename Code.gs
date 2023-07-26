/**
* add menu to run function from Sheet
*/
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Remove duplicates')
  .addItem('Remove duplicate rows','removeDupRows')
  .addToUi();
}

/**
* remove duplicate rows from Google Sheets data range
*/
function removeDupRows() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Retrieve the values from `MASTER` sheet and create an object for searching values.
  const sheet1 = ss.getSheetByName('MASTER');
  const valuesSheet1 = sheet1.getRange("A:A").getValues()
  .reduce((o, [a,,,,,f]) => Object.assign(o, {[a + f]: true}), {});

  // 2. Retrieve the values from current sheet and create an array for deleting the rows.
  const valuesSheet2 = ss.getActiveRange().getValues()
  .reduce((ar, [a,b], i) => {
    if (valuesSheet1[a + b]) ar.push(i + 2);
    return ar;
  }, []).reverse();
  
  // 3. Delete rows.
  valuesSheet2.forEach(r => ss.deleteRow(r));
    
}

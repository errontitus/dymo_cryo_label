function onOpen() {
  // Add a custom menu to the spreadsheet.
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createAddonMenu()
      .addItem('Print', 'menuLabelsPrintLabel')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Client')
      .setTitle('DYMO CryoLabel')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showSidebar(html);
}

function menuLabelsPrintLabel() {
  showSidebar();  
}

function getActiveRow()
{
  var sheet = SpreadsheetApp.getActiveSheet();  
  return sheet.getActiveCell().getRow();
}

// Called from the client.
function getSampleID()
{
  // Return the SampleID for the currently selected row. There is probably a more elegant way to do this...
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = getActiveRow();  
  var range = sheet.getRange(row, 1)
  var cell = range.getCell(1, 1) // Coordinates are relative to the range.
  var id = cell.getDisplayValue();
  Logger.log(id);
  return id;
}

// Called from the client.
function getLabelText()
{
  // Return the text displayed in the currently selected cell.
  var sheet = SpreadsheetApp.getActiveSheet();  
  var cell = sheet.getActiveCell();
  var text = cell.getDisplayValue();
  Logger.log(text);
  return text;
}


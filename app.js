var ss = SpreadsheetApp.openById('10OZU2p-dK1gllqFHMRWFUUiKywb6_DFdF9BnQEsRCQ8')
var sheet = ss.getSheetByName('oxford3000')

function doGet(e) {
  var action = e.parameter.action
if (action == 'getUsers') {
    return getUsers(e)
  }
}

function getUsers(e) {
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues()
  var data =[]
  for(var i=0; i<rows.length;i++){
    var row = rows[i]
    var record = {}
        record['eng']=row[0]
        record['type']=row[1]
        record['th']=row[2]
        data.push(record)
  }
  var result = JSON.stringify(data)
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON)
}

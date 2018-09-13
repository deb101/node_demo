const fs = require ('fs');

var addNote = (_title, _notes) => {
  fs.writeFileSync((_title + '.txt'),_notes);
}

var removeNote = (_title) => {
  var fileStatus = fs.existsSync("./" + _title + ".txt");
  if(fileStatus){
    fs.unlink("./"+_title + ".txt");
  }
  else{
    console.log("file doesn't exists !! ");
  }
}

module.exports = {
  addNote,
  removeNote
}

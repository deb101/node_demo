const yargs = require ('yargs').argv;
const note = require ('./note');

var title = yargs.title;
var notes = yargs.notes;
var command = yargs._[0];

if(command == "add"){
  note.addNote(title, notes);
}
else if(command == "remove"){
  note.removeNote(title);
}
else{
  console.log("command invalid");
}

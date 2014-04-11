var cson = require("cson")
var TerraformError = require("../../error").TerraformError

exports.compile = function(filePath, callback){
  cson.parseFile(filePath, function(err, json){

    var error = null;
    if(err) {
      // we are reverse enginerring the cson error object
      // which can probably be found...somewhere...
      var tmp       = {};
      tmp.lineno    = err.last_line
      tmp.message   = err.toString()
      tmp.source    = "CSON"
      tmp.dest      = "JSON"
      tmp.name      = "CSON Error"
      tmp.filename  = filePath
      tmp.stack     = err.toString()
      error         = new TerraformError(tmp)
    }

    callback(error, json)
  })
}

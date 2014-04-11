polymer = require './'
# tcson = require './lib/data/processors/cson.js'
{inspect} = require 'util'

poly = polymer.root('test/fixtures/data/cson')
poly.render 'invalid.cson', ->
  console.log "test", arguments

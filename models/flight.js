import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  price: {
  type: Number,
  default: 0,
  min: 0,
  },
  seat: {type: String, match: /[A-F][1-9]\d?/},
  
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function(){
      return new Date(new Date().setFullYear(new Date().getFullYear()+1))
    },
  },
  tickets: [ticketSchema]


})

const Flight = mongoose.model ('Flight', flightSchema)

export {
  Flight
}
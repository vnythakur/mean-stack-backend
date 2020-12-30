const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const careerSchema = new Schema({
    "title": {
      "type": "String"
    },
    "category": {
      "type": "String"
    },
    "altTitle": {
      "type": ["String"]
    },
    "description": {
      "type": "String"
    },
    "weeklyWorkHours": {
      "max": {
        "type": "Number"
      },
      "min": {
        "type": "Number"
      },
      "schedule": {
        "type": "String"
      }
    },
    "url": {
      "type": "String"
    },
    "slug": {
      "type": "String"
    },
    "yearlyAvgSalary": {
      "type": [
        "Mixed"
      ]
    }
});

module.exports = mongoose.model('Career', careerSchema, 'career');
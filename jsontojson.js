var input = {
     "name": "Bob Odenkirk",
     "title": "Software Engineer",
     "location": {
         "locality": "San Francisco",
         "region": "CA",
         "country": "United States"
     },
     "age": 62,
     "status": "Active"
};

var outputFormat = {
	"name": "name",
  "occupations": "title",
  "locations": "location.locality, location.region"
};

var flatInput = {};

function generateFlatInput(input, parent){
	 for (var prop in input) {
   		if(input.hasOwnProperty(prop) && typeof input[prop] === 'object')
      		flatInput = generateFlatInput(input[prop], parent + prop + '.');
     	else
         flatInput[parent + prop] =  input[prop];
    }
    
    return flatInput;
}

function generateOutput(input, outputFormat, delimiter){
	 input = generateFlatInput(input, '');
   
	 for (var prop in outputFormat) {
   		var fields = outputFormat[prop].split(delimiter);
      var fieldValue = [];
      for(i = 0; i < fields.length; i++){
					if(!input.hasOwnProperty(fields[i].trim())) continue;
          
          fieldValue.push(input[fields[i].trim()]);
      }
      outputFormat[prop] = fieldValue.join(delimiter);
   }
   
   return outputFormat;
}

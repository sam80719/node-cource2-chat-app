var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
	it('should generate correct message object', ()=>{
		// store res in variable
		// assert from match
		// assert text match
		// assert createAt is number
		var from = 'Andrea';
		var text = 'I love you';
		var message = generateMessage(from, text);

		expect(message.createAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});



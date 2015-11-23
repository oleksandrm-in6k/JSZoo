Adescribe('Abstract Animal object test', function(){
	var computer;

	beforeEach(function(){
		computer = new Computer();
	});


	it('test #1', function(){
		expect(computer.t()).toEqual(true);
	})


});

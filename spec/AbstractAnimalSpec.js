describe('Abstract Animal object test', function(){
	var animal;

	beforeEach(function(){
		animal = new AbstractAnimal();
	});

	afterEach(function(){
		animal.kill();
	});

	describe('Test setter and getter for name ', function() {
		it('should set and get name', function(){
			var testVal = 'Test name';
			
			animal.setName(testVal)

			expect(animal.getName()).toBe(testVal);
		});

		it('set name should throw exception when param type error', function() {
			var testVal = 123;
			expect(animal.setName.bind(undefined, testVal)).toThrow();
		});
	});
	
	describe('Test setter and getter for kind ', function() {
		it('should set and get kind', function(){
			var testVal = 'Test king';
			animal.setKind(testVal)

			expect(animal.getKind()).toBe(testVal);
		});
		it('set kind should throw exception when param type error', function() {
			var testVal = 123;
			expect(animal.setKind.bind(undefined, testVal)).toThrow();
		});
	});

	describe('Test setter and getter for size ', function() {	
		it('should set and get size', function(){
			var testVal = 13;
			animal.setSize(testVal)

			expect(animal.getSize()).toBe(testVal);
		});
		it('set size should throw exception when param type is not number', function() {
			var testVal = 'test string';
			expect(animal.setSize.bind(undefined, testVal)).toThrow();
		});
	});

	describe('Test setter and getter for eat period and timer for eat timer', function() {	
		it('should set and get eat period', function(){
			var testVal = 14;
			animal.setEatingPeriod(testVal)

			expect(animal.getEatingPeriod()).toBe(testVal);
		});

		it('set eat period should throw exception when param type is not number', function() {
			expect(animal.setEatingPeriod.bind(undefined, 'Test')).toThrow();
			expect(animal.setEatingPeriod.bind(undefined, -13)).toThrow();
		});

		it('set eating period should call function set interval and reset interval', function() {
			var testVal = 15;

			var _setInterval = setInterval;

			spyOn(window, 'setInterval');

			animal.setEatingPeriod(testVal);
			expect(setInterval).toHaveBeenCalledWith(jasmine.any(Function), testVal);
		});
	});


	describe('Test setter and getter for voice', function() {
		it('should set and get voice', function(){
			var testVal = 'Kvaaaaaaaaa';
			animal.setVoice(testVal);

			expect(animal.getVoice()).toBe(testVal);
		});
		it('set voice should throw exception when param type error', function() {
			var testVal = 123;
			expect(animal.setKind.bind(undefined, testVal)).toThrow();
		});
	});

	

	it('should set and get voice period', function(){
		var testVal = 14;
		animal.setVoice('testVoice');
		animal.setVoicePeriod(testVal)

		expect(animal.getVoicePeriod()).toBe(testVal);
	});

	it('set voice period should throw exception when param type is not number', function() {
		expect(animal.setVoicePeriod.bind(undefined, 'Test')).toThrow();
		expect(animal.setVoicePeriod.bind(undefined, -13)).toThrow();
	});

	it('Set voice period should call function set interval', function() {
			var testVal = 15;

			var _setInterval = setInterval;

			spyOn(window, 'setInterval');

			animal.setVoicePeriod(testVal);
			expect(setInterval).toHaveBeenCalledWith(jasmine.any(Function), testVal);
	});


});

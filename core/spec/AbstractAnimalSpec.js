describe('Abstract Animal', function(){
	var animal;

	beforeEach(function(){
		animal = new AbstractAnimal();
	});

	afterEach(function(){
		animal.kill();
	});

	describe('name accessors', function() {
		it('set and get name', function(){
			var testVal = 'Test name';
			
			animal.setName(testVal)

			expect(animal.getName()).toBe(testVal);
		});

		it('throws exception when param is not a string', function() {
			var testVal = 123;
			expect(animal.setName.bind(undefined, testVal)).toThrow();
		});
	});
	
	describe('kind accessors', function() {
		it('set and get kind', function(){
			var testVal = 'Test king';
			animal.setKind(testVal)

			expect(animal.getKind()).toBe(testVal);
		});
		it('throws exception when param is not a string', function() {
			var testVal = 123;
			expect(animal.setKind.bind(undefined, testVal)).toThrow();
		});
	});

	describe('size accessors', function() {	
		it('set and get size', function(){
			var testVal = 13;
			animal.setSize(testVal)

			expect(animal.getSize()).toBe(testVal);
		});
		it('throws exception when param is not a number', function() {
			var testVal = 'test string';
			expect(animal.setSize.bind(undefined, testVal)).toThrow();
		});
	});

	describe('voice accessors', function() {
		it('set and get voice', function(){
			var testVal = 'Kvaaaaaaaaa';
			animal.setVoice(testVal);

			expect(animal.getVoice()).toBe(testVal);
		});
		it('throws exception when param is not a string', function() {
			var testVal = 123;
			expect(animal.setKind.bind(undefined, testVal)).toThrow();
		});
	});

	describe('eat period accessors', function() {	
		it('set and get eat period', function(){
			var testVal = 14;
			animal.setEatingPeriod(testVal)

			expect(animal.getEatingPeriod()).toBe(testVal);
		});

		it('throws exception when param is not a positive number', function() {
			expect(animal.setEatingPeriod.bind(undefined, 'Test')).toThrow();
			expect(animal.setEatingPeriod.bind(undefined, -13)).toThrow();
		});
	});

	describe('voice period accessors', function() {	
		it('set and get eat voice', function(){
			var testVal = 14;
			animal.setVoicePeriod(testVal)

			expect(animal.getVoicePeriod()).toBe(testVal);
		});

		it('throws exception when param is not a positive number', function() {
			expect(animal.setVoicePeriod.bind(undefined, 'Test')).toThrow();
			expect(animal.setVoicePeriod.bind(undefined, -13)).toThrow();
		});
	});

	describe('eat timer', function() {
		it('starts timer for make voice', function() {
			var temp = setInterval,
				testVal = 123;

			spyOn(window, 'setInterval');
			animal.setEatingPeriod(testVal);
			animal.startEatTimer();
			expect(setInterval).toHaveBeenCalledWith(jasmine.any(Function), testVal);

			setInterval = temp;
		});	

		it('stops eat timer', function() {
			var temp = clearInterval,
				testVal = 123;

			spyOn(window, 'clearInterval');

			animal.setEatingPeriod(testVal);
			var intervalId = animal.startEatTimer();
			animal.stopEatTimer();
			expect(clearInterval).toHaveBeenCalledWith(intervalId);

			clearInterval = temp;
		});

		it('start of eat timer should stops eat timer only if it has been started', function() {
			spyOn(animal, 'stopEatTimer');
			animal.setEatingPeriod(3);
			animal.startEatTimer();
			expect(animal.stopEatTimer).not.toHaveBeenCalled();
			animal.startEatTimer();
			expect(animal.stopEatTimer).toHaveBeenCalled();
		});
	});

	describe('voice timer', function() {
		it('starts timer for energy decrement', function() {
			var temp = setInterval,
				testVal = 123;

			spyOn(window, 'setInterval');
			animal.setVoicePeriod(testVal);
			animal.startVoiceTimer();
			expect(setInterval).toHaveBeenCalledWith(jasmine.any(Function), testVal);

			setInterval = temp;
		});	

		it('stops voice timer', function() {
			var temp = clearInterval,
				testVal = 123;

			spyOn(window, 'clearInterval');

			animal.setVoicePeriod(testVal);
			var intervalId = animal.startVoiceTimer();
			animal.stopVoiceTimer();
			expect(clearInterval).toHaveBeenCalledWith(intervalId);

			clearInterval = temp;
		});

		it('start of voice timer should stops voice timer only if it has been started', function() {
			spyOn(animal, 'stopVoiceTimer');
			animal.setVoicePeriod(3);
			animal.startVoiceTimer();
			expect(animal.stopVoiceTimer).not.toHaveBeenCalled();
			animal.startVoiceTimer();
			expect(animal.stopVoiceTimer).toHaveBeenCalled();
		});
	});


});

/*
* Basic implementation of SBrick.js
*/
(() => {


	const SBRICKNAME = 'SBrick';

	const PORTS = {
		PORT_TOP_LEFT: 0,
		PORT_BOTTOM_LEFT: 1,
		PORT_TOP_RIGHT: 2,
		PORT_BOTTOM_RIGHT: 3
	};

	let mySBrick;


	/**
	* connect to the SBrick
	* @returns {undefined}
	*/
	const connect = function() {
		mySBrick.connect()
		.then( (value) => {
			// SBrick now is connected
			document.getElementById('control-functions').classList.remove('is-hidden');
			document.getElementById('connect-functions').classList.add('is-hidden');
		} )
		.catch( (e) => {
			window.util.log('Caught error in SBrick.connect: ' + e);
		});
	};
	


	/**
	* start motor on port top left
	* @returns {undefined}
	*/
	const lightsOn = function(e) {
		e.preventDefault();
		const data = {
			portId: PORTS.PORT_TOP_LEFT,
			direction: mySBrick.CLOCKWISE,
			power: mySBrick.MAX
		}
		mySBrick.drive(data)
	};


	/**
	* stop the lights on port top left
	* @returns {undefined}
	*/
	const lightsOff = function(e) {
		e.preventDefault();
		mySBrick.stop(PORTS.PORT_TOP_LEFT);
	};
	


	/**
	* start motor on port bottom left
	* @returns {undefined}
	*/
	const startMotor = function(e) {
		e.preventDefault();
		const data = {
			portId: PORTS.PORT_BOTTOM_LEFT,
			direction: mySBrick.CLOCKWISE,
			power: mySBrick.MAX
		}
		mySBrick.drive(data)
	};


	/**
	* stop the motor on port bottom left
	* @returns {undefined}
	*/
	const stopMotor = function(e) {
		e.preventDefault();
		mySBrick.stop(PORTS.PORT_BOTTOM_LEFT);
	};
	


	/**
	* rotate servo motor on port top right
	* @returns {undefined}
	*/
	const rotateServo = function(e) {
		e.preventDefault();
		const data = {
			portId: PORTS.PORT_TOP_RIGHT,
			direction: mySBrick.CLOCKWISE,
			power: mySBrick.MAX
		}
		mySBrick.drive(data)
	};


	/**
	* reset the servo motor back to starting position on port top right
	* @returns {undefined}
	*/
	const resetServo = function(e) {
		e.preventDefault();
		mySBrick.stop(PORTS.PORT_TOP_RIGHT);
	};
	
	



	/**
	* add event listeners for controlling the SBrick
	* @returns {undefined}
	*/
	const addEventListeners = function() {
		document.getElementById('connect-btn').addEventListener('click', connect);
		document.getElementById('lights-btn-start').addEventListener('click', lightsOn);
		document.getElementById('lights-btn-stop').addEventListener('click', lightsOff);
		document.getElementById('motor-btn-start').addEventListener('click', startMotor);
		document.getElementById('motor-btn-stop').addEventListener('click', stopMotor);
		document.getElementById('servo-btn-start').addEventListener('click', rotateServo);
		document.getElementById('servo-btn-stop').addEventListener('click', resetServo);
	};
	
	

	/**
	* initialize all functionality
	* @param {string} varname - Description
	* @returns {undefined}
	*/
	const init = function() {
		mySBrick = new SBrick();
		addEventListeners();
	};

	// kick of the script when all dom content has loaded
	document.addEventListener('DOMContentLoaded', init);

})();

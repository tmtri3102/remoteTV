class Remote {
	constructor(id, tv) {
		this.id = id;
		this.tv = tv;
	}
	switchChannel() {
		this.tv.channel = channel;
	}
	setVolume() {
		this.tv.volume = volume;
	}
}

class TiVi {
	constructor(channel, volume) {
		this.channel = channel;
		this.volume = volume;
		this.status = false;
	}
	getStatus() {
		this.status == this.status ? alert("TV turned on") : alert("TV turned off");
	}
	turnOn() {
		this.status = true;
		console.log("Turn on");
	}
	turnOff() {
		this.status = false;
		console.log("Turn off");
	}
	setChannelTV(newChannel) {
		this.channel = newChannel;
	}
	setVolumeTV(newVolume) {
		this.volume = newVolume;
	}
}

let Samsung = new TiVi(2, 10);
let remote1 = new Remote(1, Samsung);
Samsung.turnOn();
Samsung.getStatus();
Samsung.setChannelTV(7);

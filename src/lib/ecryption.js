
Meteor.methods({
	encrypt: function(string){
		
		var encrypted = CryptoJS.AES.encrypt(string, "12%$(0)!&/(|");
		console.log(encrypted.toString());
		return encrypted.toString();
	},
	decrypt: function(string){
		var decrypted = CryptoJS.AES.decrypt(string, "12%$(0)!&/(|");
		decrypted = decrypted.toString(CryptoJS.enc.Utf8);
		console.log(decrypted);
		return decrypted.toString(CryptoJS.enc.Utf8);
	}
});
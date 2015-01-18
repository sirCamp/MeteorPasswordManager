
Meteor.methods({
	encrypt: function(message){
		
		var encrypted = CryptoJS.AES.encrypt(message, "12%$(0)!&/(|");
		console.log(encrypted.toString());
		return encrypted;
	},
	decrypt: function(message){
		var decrypted = CryptoJS.AES.decrypt(message, "12%$(0)!&/(|");
		decrypted = decrypted.toString(CryptoJS.enc.Utf8);
		console.log(decrypted);
		return decrypted;
	}
});
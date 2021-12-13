var dono = prompt("Enter the donator's blood type blood type between (O+, O-, A+, A-, B+, B-, AB+, AB-)");
var reci = prompt("Enter the reciever's blood type blood type between (O+, O-, A+, A-, B+, B-, AB+, AB-)");

//
function BloodDonation(dono, reci) {
	if(dono=="A+" && (reci==dono ||  reci=="AB+")){
		return true;
	}
	if(dono=="O+" && (reci==dono || reci=="A+" || reci=="B+" || reci=="AB+")){
		return true;
	}
	if(dono=="B+" && (reci==dono ||  reci=="AB+")){
		return true;
	}
	if(dono=="AB+" && (reci==dono)){
		return true;
	}
	if(dono=="A-" && (reci==dono ||  reci=="AB+" || reci=="A+" || reci=="AB-")){
		return true;
	}
	if(dono=="O-"){
		return true;
	}
		if(dono=="B-" && (reci==dono ||  reci=="AB+" || reci=="B+" || reci=="AB-")){
		return true;
	}
	
	if(dono=="AB-" && (reci==dono || reci=="AB+")){
		return true;
	}
	return false;
}

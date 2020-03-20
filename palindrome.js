function palindrome(str) {
	var k=/[\W_]/g;
	var lower=str.toLowerCase().replace(k,'');
	var reverse=lower.split('').reverse().join('');
	if(lower===reverse){
		return true;
	}
	else{
		return false;
	}
}

palindrome("eye");

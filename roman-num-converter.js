function solution(roman){

	let finalNum = 0;

	let romanToNum = [];
	
	let romanArr = Array.from(roman);

	if (!(romanArr === undefined)) {

		romanArr.forEach(function(char) {

			switch (char) {
				case 'I': 
					romanToNum[romanToNum.length] = 1;
					break;
				case 'V':
					romanToNum[romanToNum.length] = 5;
					break;
				case 'X':
					romanToNum[romanToNum.length] = 10;
					break;
				case 'L':
					romanToNum[romanToNum.length] = 50;
					break;
				case 'C':
					romanToNum[romanToNum.length] = 100;
					break;
				case 'D':
					romanToNum[romanToNum.length] = 500;
					break;
				case 'M':
					romanToNum[romanToNum.length] = 1000;
					break;
			}
		});

		for (let i = 0; i < romanToNum.length; i++) {
			if (romanToNum[i] < romanToNum[i+1]) {
				finalNum += (romanToNum[i+1] - romanToNum[i]);
				romanToNum.splice(i+1);
			}
			else {
				finalNum += romanToNum[i];
			}
		}

		return finalNum;
	}
	else {
		return 0;
	}  
}
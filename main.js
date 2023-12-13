const addition = () => {
	const tal1 = parseInt(document.getElementById("tal1").value);
	const tal2 = parseInt(document.getElementById("tal2").value);

	document.getElementById("svar").value = tal1 + tal2;
};

const subtraktion = () => {
	const tal1 = parseInt(document.getElementById("tal1").value);
	const tal2 = parseInt(document.getElementById("tal2").value);

	document.getElementById("svar").value = tal1 - tal2;
};

const multiplikation = () => {
	const tal1 = parseInt(document.getElementById("tal1").value);
	const tal2 = parseInt(document.getElementById("tal2").value);

	document.getElementById("svar").value = tal1 * tal2;
};

const division = () => {
	const tal1 = parseInt(document.getElementById("tal1").value);
	const tal2 = parseInt(document.getElementById("tal2").value);

	document.getElementById("svar").value = tal1 / tal2;
};

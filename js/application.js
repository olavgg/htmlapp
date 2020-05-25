const renderTable = data => {

	let tableBodyHtml = "";
	data.forEach( person => {
		tableBodyHtml += `
		<tr>
			<td>${person.id}</td>
			<td>${person.name}</td>
			<td>${person.title}</td>
			<td>${person.departments.map(department => `
				${department}
			`).join(', ')}
			</td>
		</tr>
		`
	});
	document.querySelector('table tbody').innerHTML = tableBodyHtml;
};

fetch("https://cvapi.ree.io/list", {
		credentials: 'include'
	})
	.then( response => {
		return response.json();
	})
	.then( renderTable );
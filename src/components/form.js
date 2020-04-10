import React from 'react';

function form() {
	return (
		<form name="contact" method="POST" action="/page-2" data-netlify="true" netlify>
			<label htmlFor=""> First Name</label>
			<input type="text" />
			<label htmlFor=""> Last Name</label>

			<input type="text" />

			<button type="submit">submit</button>
		</form>
	);
}

export default form;

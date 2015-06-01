console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(aStatic, ...strs) {
	var name = strs[0];
	var comment = strs[1];

	comment = escape(comment);

	return `${aStatic[0]}${name}${aStatic[1]}${comment}${aStatic[2]}`;
}

function escape(comment) {
	return comment.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
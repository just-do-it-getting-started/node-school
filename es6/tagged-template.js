console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...strs) {
	var staticString = strs[0];
	var name = strs[1];
	var comment = strs[2];

	comment = comment.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/'/g, '&apos;');


	return `${staticString[0]}${name}${staticString[1]}${comment}${staticString[2]}`;
}
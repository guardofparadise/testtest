

console.log()

const getExchange = async (from,to) => {
	const response = await axios.get('https://restcountries.eu/rest/v2/name/aruba?fullText=true');
	console.log(response)
	let main = document.querySelector('#main');
	const div = document.createElement('div');
	const text = document.createElement('p');
	text.innerHTML = `<div>
		<h2>Hello</h2>
		<p>How to sony</p>
		<small>${response.data["0"].name}</small>
	</div>`
	div.appendChild(text)
	main.appendChild(div)
}



getExchange();
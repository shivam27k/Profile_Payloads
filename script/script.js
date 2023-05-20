let fetchedData = []
let profileDropdown = document.getElementsByClassName('profile_dropdown')
let profile = document.getElementsByClassName('profile')

function fetchData() {
	fetch(
		'https://script.google.com/macros/s/AKfycbzBTJ_yfI6o5GgEzxM8afOxPAy5IyizKXM0zrmuenpAtjB4yRwGBpWVtCyhosVEFn9Z/exec'
	)
		.then((response) => response.json())
		.then((responseData) => {
			fetchedData = responseData
			console.log(fetchedData)

			dropDown()

			multipleProfiles()
		})
		.catch((error) => {
			console.error(error)
		})
}

function dropDown() {
	for (var i = 0; i < profileDropdown.length; i++) {
		profileDropdown[i].addEventListener('click', function () {
			this.classList.toggle('active')
			var content = this.nextElementSibling
			if (content.style.maxHeight) {
				content.style.maxHeight = null
			} else {
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	}
}

function multipleProfiles() {
	for (let i = 1; i < fetchedData.length; i++) {
		let newProfile = profile[0].cloneNode(true)

		newProfile.querySelector('.profile_name').innerHTML = fetchedData[i][0]
		newProfile.querySelector('.profile_content').innerHTML = `
		<div>
		{

			"id": {
				"S": " "
			},

			"certification": {
				"S": " "
			},

			"createdAt": {
				"S": " "
			},

			"currentoffer": {
				"S": " "
			},

			"experience": {
				"S": " "
			},

			"expertise": {
				"S": " "
			},

			"image": {
				"S": " "
			},

			"imageicon1": {
				"S": " "
			},

			"link1": {
				"S": "${fetchedData[i][9]}"
			},

			"location": {
				"S": "${fetchedData[i][7]} - ${fetchedData[i][8]}"
			},

			"name": {
				"S": "${fetchedData[i][0]}"
			},

			"noticeperiod": {
				"S": "${fetchedData[i][5]}"
			},

			"profileviews": {
				"N": "0"
			},

			"salarycurrent": {
				"S": "${fetchedData[i][3]}"
			},

			"salaryexpectation": {
				"S": "${fetchedData[i][4]}"
			},

			"updatedAt": {
				"S": " "
			},

			"UserId": {
				"S": " "
			},

			"__typename": {
				"S": "Newprofile"
			}'

		}

		</div>
		`
		// add any other properties you want to display

		profile[0].parentNode.appendChild(newProfile)

		let dropdown = newProfile.querySelector('.profile_dropdown')
		dropdown.addEventListener('click', function () {
			this.classList.toggle('active')
			var content = this.nextElementSibling
			if (content.style.maxHeight) {
				content.style.maxHeight = null
			} else {
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	}
}

document.addEventListener('DOMContentLoaded', fetchData)

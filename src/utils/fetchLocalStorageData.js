export function fetchUser() {
	let user = null
	if (localStorage.getItem('user') !== null) {
		user = JSON.parse(localStorage.getItem('user'))
	} else {
		localStorage.clear()
	}
	return user
}

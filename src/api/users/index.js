export const getUserRoles = async() => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/roles', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 401) {
                localStorage.clear();
                window.location.href = '/login'
                throw new Error('Unathorized')
            }
            if (response.status === 500) throw new Error('Server Error');
        }

    } catch (error) {
        console.log('Fetch failed with', error)
    }
}
export const registerNewUser = async (data) => {
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/registration', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    ...data
                }
            )
        })

        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 400) throw new Error('Bad request');
            if (response.status === 500) throw new Error('Server Error');
        }
    } catch (error) {
        console.error('Fetch failed with', error)
    }
}

export const loginUser = async (data) => {
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    ...data
                }
            )
        })

        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 400) throw new Error('Bad request');
            if (response.status === 500) throw new Error('Server Error');
        }

    } catch (error) {
        console.log('Fetch failed with', error)
    }
}

export const getUserProfile = async () => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/profile', {
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

export const editUserProfile = async (data) => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                ...data
            })
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

export const logout = async() => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch('https://camp-courses.api.kreosoft.space/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })

        if (response.ok) {
            localStorage.clear();
            window.location.href = '/login'
        } else {
            if (response.status === 400) throw new Error('Bad request');
            if (response.status === 500) throw new Error('Server Error');
        }

    } catch (error) {
        console.log('Fetch failed with', error)
    }
}
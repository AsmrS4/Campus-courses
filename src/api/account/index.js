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

        if(response.ok) {
            return response.json();
        } else {
            if(response.status === 400) throw new Error('Bad request');
            if(response.status === 500) throw new Error('Server Error');
        }
    } catch (error) {
        console.error('Fetch failed with', error)
    }
}

export const loginUser = async(data) => {
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

        if(response.ok) {
            return response.json();
        } else {
            if(response.status === 400) throw new Error('Bad request');
            if(response.status === 500) throw new Error('Server Error');
        }

    } catch (error) {
        console.log('Fetch failed with', error)
    }
}
async function getToken() {
    try {
        const response = await fetch ("https://accounts.spotify.com/api/token",{
            method : "POST",
            headers: {
                'Content-type': "application/x-www-form-urlencoded",
                'Authorization': `Basic ${btoa("7b73fb328696451d92ff1ade335dacad" + ":" + "be21fcc1970b42d8b81cfda48c48479a")}`
            },
            body: "grant_type=client_credentials"
        });

        const auth = await response.json()

        localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`)
    }catch(error){
        console.log(error);
    }
}

export  {getToken}


// client Id:7b73fb328696451d92ff1ade335dacad
// client secret : be21fcc1970b42d8b81cfda48c48479a
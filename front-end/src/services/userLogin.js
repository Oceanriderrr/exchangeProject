const url = "http://localhost:5000/api/user/login";
let options = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    
}

export default function userLogin(data){
    console.log(data);
    options.body= JSON.stringify(data);
    console.log(options);
    return fetch(url, options)
            .then(data => data.json() )
            .catch(error =>{
                console.log(error)
                return error;
            });
}
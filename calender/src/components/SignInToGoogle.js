export const signInToGoogle = async ()=>{
    try {
        let googleuser = await gapi.auth2.getAuthInstance().signIn({prompt:'consent'});
        if (googleuser){
            return true;
        }
    } catch (error) {
        console.log(error)
    }
};
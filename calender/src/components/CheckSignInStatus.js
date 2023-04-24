export const checkSignInStatus =async () =>{
    try {
        let status = await gapi.auth2.getAuthInstance().isSignedIn.get();
        return status;
    } catch (error) {
        console.log(error);
    }
}

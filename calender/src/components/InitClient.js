export function initClient(callback) {
    gapi.load('client:auth2',()=>{
        try {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(function () {
                if (typeof(callback)==='function'){
                    callback(true)
                }
            }, function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    });
};
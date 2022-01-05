export default {
    getAuthor() {
        return new Promise( function(resolve, reject) {
            resolve({first_name: "Vasiliy", last_name: "Krasnoborodko"});
            
        } );
    },
    
    getFriends() {
        return new Promise( function(resolve, reject) {
            /*resolve(
                {
                    count: 202,
                    items: [
                        {
                        id: 1,
                        datetime: "datetime1",
                        email: "email1"
                        },
                        {
                        id: 2,
                        datetime: "datetime2",
                        email: "email2"
                        },
                        {
                        id: 3,
                        datetime: "datetime3",
                        email: "email3"
                        },
                    ]
                }*/
            
            send_comand( {act: "list"}, 
                function(R) {
                    console.log('Success');
                    console.log(R);
                    resolve(R.message);
                },
                function(R) {
                    console.log('Error');
                    console.log(R);
                    reject(new Error("Whoops!"));
                }
            );
        } );
    },
    
    getUser(id) {
        return new Promise( function(resolve, reject) {
            send_comand( {act: "user", id: id}, 
                function(R) {
                    console.log('Success');
                    console.log(R);
                    resolve(R.message);
                },
                function(R) {
                    console.log('Error');
                    console.log(R);
                    reject(new Error("Whoops!"));
                }
            );
            
            
        } );
    },
};
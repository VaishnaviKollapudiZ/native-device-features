import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('places.db')


//create a basic table
export const init = ()=>{
    //transaction to be performed(callback), error,success
    const promise =   new Promise((resolve,reject)=>{

        db.transaction((transactionObj)=>{
            transactionObj.executeSql(
                `CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL, address TEXT NOT NULL, lat REAL, lng REAL);`,
                [],
                (_)=>{
                    resolve(_);
                },
                (_,err)=>{
                    reject(err);
                    return true;
                }
            )
        })
    })
    return promise;
    
}

export const insertPlace = (title:string,imageUrl:string,address:string,lat:number,lng:number)=>{
     
    const promise =   new Promise((resolve,reject)=>{

        db.transaction((transactionObj)=>{
            transactionObj.executeSql(
                `INSERT INTO places (title,imageUrl,address,lat,lng) 
                VALUES(?,?,?,?,?);`,
                [title,imageUrl,address,lat,lng],
                (_,result)=>{
                    resolve(result);
                },
                (_,err)=>{
                    reject(err);
                    return true;
                }
            )
        })
    })
    return promise;
}

export const fetchPlaces = ()=>{
    const promise =   new Promise((resolve,reject)=>{

        db.transaction((transactionObj)=>{
            transactionObj.executeSql(
                `SELECT * FROM places;`,
                [],
                (_,result)=>{
                    resolve(result);
                },
                (_,err)=>{
                    reject(err);
                    return true;
                }
            )
        })
    })
    return promise;
}
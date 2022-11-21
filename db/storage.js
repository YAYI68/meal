import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("meal.db")

export const init = ()=>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql("CREATE TABLE IF NOT EXISTS meals (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL,duration INTEGER NOT NULL,",[],
            (_,result)=>{
                resolve()
                console.log(result)
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    })
    return promise;
}

export const insertDbMeal = (meal)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql("INSERT INTO meals (id,title,imageUrl,duration) VALUES (?,?,?,?)",[meal.id,meal.title,meal.imageUrl,meal.duration],
            (_,result)=>{
                resolve(result)
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    });
    return promise;

}

export const getDbMeals = ()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql("SELECT * FROM meals",[],
            (_,result)=>{
                resolve(result)
               console.log(result)
            },
            (_,error)=>{
               reject(error)
               console.log(error)
            }
            )
        })
    })
    return promise;
}

export const getDbSingleMeal = (id)=>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql("SELECT FROM meals WHERE id = ?",[id],
            (_,result)=>{
               resolve(result)
               console.log(result)
            },
            (_,error)=>{
                reject(error)
                console.log(error)
            }
            )
        })
    })
    return promise;
}
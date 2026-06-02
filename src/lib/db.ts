const mongo_URL = process.env.MONGODB_URL
if(!mongo_URL){
    console.log("MongoDB URL is not found")
}

const cached = global.mongoose


export const postApiService = {
    getAllPosts : async () : Promise<any[]> => {
        let response  = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
        return response
    },
    getPostsById : async (id:number):Promise<any[]> =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+ id).then(value => value.json())
        return  response
    }
}


export const commentApiService = {
    getAllComments : async ():Promise<any[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
        return response
    },
    getCommentsById: async (id:number):Promise<any[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+ id).then(value => value.json())
        return response
    }
}
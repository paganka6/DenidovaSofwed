import Post from "./Post.js"

class PostService{
    async create(post){
        const createdPost = await Post.create(post);
        return createdPost;      
    }

    async getAll(){
        const post = await Post.find();
        return post;
    }

    async getOne(id){
        if(!id){
            throw new Error('не указан Id')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post){        
        if (!post._id){
            throw new Error('не указан Id')
        }
        console.log(post._id, post,{new:true})
        const updatedPost = await post.findByIdAndUpdate(post._id, post,{new:true})
        return updatedPost;
    }

    async delete(id){
            if (!post._id){
                throw new Error('не указан Id')
            }
            const post = await Post.findByIdAndDelete(id);
            return post;

    }
}

export default new PostService();
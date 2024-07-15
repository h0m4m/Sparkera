import  { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

const Post = models.Post || model('Post', PostSchema);


export default Post;
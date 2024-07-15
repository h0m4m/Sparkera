import { connectToDB } from "@utils/database";
import Post from '@models/post';

// GET (READ)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id).populate('creator');
        if (!post) return new Response("Post not found.", { status: 404 });

        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 });
    }
};

// PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
    const { content, tag } = await request.json();

    try {
        await connectToDB();
        const existingPost = await Post.findById(params.id);

        if (!existingPost) return new Response("Post not found", { status: 404 });
        existingPost.content = content;
        existingPost.tag = tag;

        await existingPost.save();
        return new Response(JSON.stringify(existingPost), { status: 200 });

    } catch (error) {
        return new Response("Failed to update post", {
            status: 500
        });
    }
};

// DELETE (DELETE)
export const DELETE = async (request, { params }) => {
    console.log("DELETE request received");
    console.log("Params:", params);

    try {
        await connectToDB();
        console.log("Connected to database");

        const deletedPost = await Post.findByIdAndDelete(params.id);
        console.log("Deleted Post:", deletedPost);

        if (!deletedPost) {
            console.log("Post not found");
            return new Response("Post not found", { status: 404 });
        }

        return new Response("Post deleted successfully", { status: 200 });
    } catch (error) {
        console.log("Error in DELETE method:", error);
        return new Response("Failed to delete post", { status: 500 });
    }
};

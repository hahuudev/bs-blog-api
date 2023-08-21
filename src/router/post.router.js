import express from 'express';
import postController from '~/controllers/post.controller';

const routerPost = express.Router();

routerPost.route('/').get(postController.index)

export default routerPost;
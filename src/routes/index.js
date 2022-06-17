import postsRouter from './postsRouter.js';

export default function route(app) {
    app.use('/', postsRouter);
}

import * as express from 'express';
import * as articleControllers from '../controllers/Article';

const router = express.Router();

router.get('/', articleControllers.fetchArticles);
router.post('/', articleControllers.createArticle);
router.delete('/', articleControllers.deleteArticle);
router.post('/view', articleControllers.incrementView);

export default router;

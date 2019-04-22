import { Router } from 'express';
import ItemController from '../controllers/items';

const router = Router();

router.get('/', ItemController.getListOfItems);

router.get('/:id', ItemController.getItemDetail);

export default router;

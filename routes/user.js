import express from "express";
import { addOnce, deleteById, getAll, getOnce, putOnce, updateOnceById } from "../controllers/user.js";

const router = express.Router();





router
.route('/')
.get(getAll)
.post(addOnce);


router
.route('/:name')
.get(getOnce)
.put(putOnce)
.patch(updateOnceById)
.delete(deleteById);
/**
 * Maintenant que nous avons crée toutes ces routes
 * exportons ce module pour l'untiliser dans server.js
 * puisque c'est lui notre entrée principale "main"
 */
export default router;
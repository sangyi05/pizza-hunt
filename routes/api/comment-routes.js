const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

// PUT route to handle addNewReply()
// /api/comments/<pizzaId>/<commentId></commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

//DELETE route to handle removeReply 
// /api/comments/<pizzaId>/<commentId>/<replyId> 
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
const express = require('express');
const { addToCart, getCartItems, removeCartItem } = require('../controller/CartController');
const router = express.Router();


router.use(express.json())

router.post('/',addToCart);
router.get('/', getCartItems);
router.delete('/:id', removeCartItem);


// 장바구니에서 선택한 주문 예상 상품 목록 조회
// router.get('/carts', (req, res) => {
//     res.json('장바구니 조회')
// });

module.exports = router;
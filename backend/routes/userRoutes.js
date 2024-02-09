import express from 'express';


const router = express.Router();

router.post('/',async(req,res)=>{
    console.log('====================================');
    console.log(req.body);
    const { username, email, password } = req.body;

    console.log('====================================');
} );

export default router;

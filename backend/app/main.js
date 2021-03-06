const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');



const mySqlDb = require('../maySql');
const config = require('../config');


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, config.uploadPath)
    },
    filename:(req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req,res) => {
    const messages = await mySqlDb.getConnection().query('SELECT * FROM `news`');
    res.send(messages)
});

router.get('/:id', async (req,res) => {

    const messages = await mySqlDb.getConnection().query('SELECT * FROM `news` WHERE `id` =?',req.params.id);

    const itemId = messages[0];
    if (!itemId){
        return res.status(404).send({item: 'Not found'})
    }
    res.send(itemId)

});

router.post('/', upload.single('image'), async (req,res) => {
    const mess = req.body;
    console.log(mess);
    if(req.file){
        mess.image = req.file.filename;
    }


     await mySqlDb.getConnection().query(
        'INSERT INTO `news` (`title`,`description`,`image`) VALUES' +
        '(?,?,?)',
        [mess.title,mess.description,mess.image]
    );
    // const result = await mySqlDb.getConnection().query('SELECT * FROM `products` WHERE `id` =?',resultId.insertId);
    //
    // res.send(result)

});
router.delete('/:id', async (req,res) => {

    const result = await mySqlDb.getConnection().query('DELETE FROM `news` WHERE `id` = ?',req.params.id);
    if(result){
        res.send('Successful deleting')
    }

});
router.get('/comments', async (req,res) => {

    const result = await mySqlDb.getConnection().query('SELECT * FROM `comments`');

    res.send(result)

    console.log('sasq')
});

router.post('/comments', async (req,res) => {


    const mess = req.body;

    if (!mess.author){
        mess.author = "Anonymous"
    }

    await mySqlDb.getConnection().query(
        'INSERT INTO `comments` (`news_id`,`author`,`comment`) VALUES' +
        '(?,?,?)',
        [mess.newsId,mess.author,mess.description]
    );

    res.send('successful post')

});
router.delete('/comments/:id', async (req,res) => {

    const result = await mySqlDb.getConnection().query('DELETE FROM `comments` WHERE `id` = ?',req.params.id);
    if(result){
        res.send('Successful deleting')
    }

});
module.exports = router;
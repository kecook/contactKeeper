const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all users contacts
//@access Private
router.get('/', (req, res)=>{
    res.send('Get all contacts');
});

//@route  POST api/auth
//@desc   Add new contact
//@access Public
router.post('/', (req, res)=>{
    res.send('Add contact');
});

//@route  PUT api/auth/:id
//@desc   Update contact
//@access Private
router.put('/:id', (req, res)=>{
    res.send('update contacts');
});

//@route  DELETE api/auth/:id
//@desc   Delete contact
//@access Private
router.delete('/:id', (req, res)=>{
    res.send('delete contact');
});


module.exports = router;
import User from "../models/user.js";

//Read All (recherche simple )
export function getAll(req,res){
    User
    .find({})
    .then(docs =>{
        res.status(200).json(docs);
    })
    .catch(err=>{
        res.status(200).json(users);
    });
}

//Create
export function addOnce(req,res){
    User
    .create(req.body) 
    .then(newuser =>{
        res.status(200).json(newuser);
    })
    .catch(err=> {
        res.status(500).json({error:err});
    });
}

//Read Once by name
export function getOnce(req,res){
    User
    .findOne({"email":req.params.email})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err =>{
        res.status(500).json({error:err});

    });
}

//Read Once by id
export function getOnceById(req,res){
    User
    .findById(req.params.id)
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err =>{
        res.status(500).json({error:err});

    });
}

//Update many docs
export function putAll(req,res){
    User
    .updateMany({},{})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

//MàJ un seul doc
export function putOnce(req,res){
    User.findOneAndUpdate({"name":req.params.name},{"last_name":req.params.last_name} )
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

//MàJ un seul doc using ID
export function updateOnceById(req,res){
    User.findById(req.params.id,{} )
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}
//Supp plusieurs docs
export function deleteMany(req,res){
    User
    .remove({})
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

//Supp un seul doc by ID
export function deleteById(req,res){
    User
    .findByIdAndRemove(req.params.id)
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

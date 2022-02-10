const route=require('express').Router();
const vmServices=require('../services/vmServices');


route.post('/addLocations',(req,res)=>{
    vmServices.addLocationItem(req.body,res);
})

route.get('/getLocations',(req,res)=>{
    vmServices.getLocations(res);
})

route.post('/addVMRecord',(req,res)=>{
    vmServices.addVMRecord(req.body,res);
})

route.get('/getVMList',(req,res)=>{
    vmServices.getVMList(res);
})

route.delete('/deleteVMRecord/:id',(req,res)=>{
    vmServices.deleteVmRecordFromList(req.params.id,res)
})

route.put('/updateVMRecord',(req,res)=>{
    vmServices.updateVMRecordData(req.body,res)
})

module.exports=route;
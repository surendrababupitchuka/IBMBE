const db = require('../firbaseConfig/config');
var locationItemRef=db.ref("vmlocations");
var itemRef = db.ref('vmCrud');

const itemOperation={
    addLocationItem(obj,res){
        locationItemRef.push(obj,(err)=>{
            if(err){
                res.status(300).json({"msg":"Something went wrong",failure:true,"error":err});
            }
            else{
                res.status(200).json({"msg":"user created sucessfully",failure:false,});
            }
        })
    },
    getLocations(res){
        locationItemRef.once('value',function(list){
            let itemsList = [];
            let itemObj = list.val();
            Object.keys(list.val()).map((itemEle,index)=>{
                itemObj[itemEle]["key"] = itemEle;
                itemsList.push(itemObj[itemEle])
            });
            res.json({"msg":"completed","data":itemsList,failure:false})
        })
    },
    addVMRecord(obj,res){
        // var oneUser=userRef.child(obj.roll);
        itemRef.push(obj,(err)=>{
            if(err){
                res.status(300).json({"msg":"Something went wrong","error":err,failure:true});
            }
            else{
                res.status(200).json({"msg":"vm created sucessfully",failure:false});
            }
        })
    },
    getVMList(res){
        itemRef.once('value',function(list){
            let itemsList = [];
            let itemObj = list.val();
            if(!itemObj){
                res.json({"msg":"completed","data":[],failure:false})
            }else{
                Object.keys(list.val()).map((itemEle,index)=>{
                    itemObj[itemEle]["key"] = itemEle;
                    itemsList.push(itemObj[itemEle])
                });
                res.json({"msg":"completed","data":itemsList,failure:false})
            }
            
        })
    },
    deleteVmRecordFromList(deleteId,res){
        var idItemRef=db.ref("vmCrud/"+deleteId);
        idItemRef.remove();
        res.json({"msg":"deleted item"})
    },
    updateVMRecordData(data,res){
        const entry = itemRef.child(data.key);
        entry.once('value', snap => {
            let dataItem = snap.val();
            delete data.key;
            dataItem = {...dataItem,data}
            entry.update(data)
        })
        res.json({"msg":"update Item"})
    }
}

module.exports=itemOperation;
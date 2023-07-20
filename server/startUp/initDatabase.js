
const Dlc = require('../models/Dlc')
const dlcMock = require('../mock/dlc.json')
const Quality = require('../models/Quality')
const qualityMock = require('../mock/quality.json')

module.exports = async () => {

const Dlcs = await Dlc.find()
    if(Dlcs.length !== dlcMock.length){
      await  createInitialEntity(Dlc, dlcMock)
    }

const Qualities = await Quality.find()
    if(Qualities.length !== qualityMock.length){
        await createInitialEntity(Quality, qualityMock)
    }
}

async function createInitialEntity(Model, data){
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try{
                delete  item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            }catch (e){
                return e
            }
        })
    )
}

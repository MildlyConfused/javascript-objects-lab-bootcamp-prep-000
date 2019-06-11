let recipes = {}

function updateObjectWithKeyAndValue(obj, key, value){
  let newObj = {}
  newObj.assign({key: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
}
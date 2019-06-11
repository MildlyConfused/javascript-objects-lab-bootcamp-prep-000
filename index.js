let recipes = {}

function updateObjectWithKeyAndValue(obj, key, value){
  let newObj = obj
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
}
// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        set: (value) =>{property = value},
        get: () =>(property),
        enumerable : false
    });
    return property;
};
const createProtoMagicObject = () => {
let obj = () => {};
obj.prototype = obj.__proto__;
return obj;
};
Function.prototype.valueOf = function(){
    return count;
}
let count = 0;
const incrementor = () => {
    count ++;
    return incrementor
};
let count2 = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        count2++;
        return resolve(count2);
    })
};
const createIncrementer = () => {
    return {
        i: 0,
        next() {
            return { value: ++this.i }
        },
        [Symbol.iterator]() {
            return {
                next: () => {
                    return this.next()
                },
            };
        }
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(param)
        },1001)
    })
};
const getDeepPropertiesCount = (object) => {
    var properties = Object.getOwnPropertyNames(object);
    var count = properties.length;
    properties.forEach(property => {
        if (Object.getOwnPropertyNames(object[property]).length > 0){
            count = count + getDeepPropertiesCount(object[property]);
        }
    })
    return count;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (mas) => {
    return mas.sort((a,b)=>( a.__proto__ - b.__proto__));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
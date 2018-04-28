export const deepCopyObjectFunction=(object,updatedProperties)=>{
    return {
        ...object,
        ...updatedProperties
    }
};
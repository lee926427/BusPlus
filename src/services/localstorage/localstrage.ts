const decodeJSON = (payload:any) => JSON.parse(payload);
export default {
    get(key:string){
        const getStorageItem = (storageKey:string) => localStorage.getItem(storageKey);
        return Promise.resolve(key).then(getStorageItem).then(decodeJSON);
    },
    set(key:string,payload:JSON|string|number|object|null){
        const setStorageItem = (storageItem: any) => (storageKey:string) =>{ 
            localStorage.setItem(storageKey,JSON.stringify(storageItem))
            return storageItem
        }
        return Promise.resolve(key).then(setStorageItem(payload)) 
    },
    remove(key:string){
        const deleteStorageItem = (storageKey:string) => localStorage.removeItem(storageKey)
        return Promise.resolve(key).then(deleteStorageItem);
    },
    clear(){
        return Promise.resolve().then(()=>{localStorage.clear()}) 
    }
}
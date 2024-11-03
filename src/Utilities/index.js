import toast from "react-hot-toast"

const getFavorite=()=>{
    const favorite = localStorage.getItem('favorite')
    if(favorite){
        const parseFavorite = JSON.parse(favorite)
       return parseFavorite
    }else{
        return []
    }
}

const addFavorite=coffee=>{
const favorite = getFavorite()
const isExist = favorite.find(item=> item.id == coffee.id)
if(isExist)return toast.error('already added!');
    favorite.push(coffee)
    localStorage.setItem('favorite',JSON.stringify(favorite))
    toast.success('Successfully added!');

}

const removeFavorite =id=>{
    const favorite =getFavorite()
    const newFavorite = favorite.filter(coffee=> coffee.id !== id)
    localStorage.setItem('favorite',JSON.stringify(newFavorite))
    toast.success('Successfully Removed')
}

export {addFavorite,getFavorite,removeFavorite} 
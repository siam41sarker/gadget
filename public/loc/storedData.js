const getStoredDataFromLs = () =>
        {
            const valStr = localStorage.getItem("Cart");
            return valStr?JSON.parse(valStr):[];
        }
const setToLs = id =>
        {
            let updatedData = [];
            const getCartDataFromLs = getStoredDataFromLs();
            if(getCartDataFromLs.includes(id))
                {
                    console.log("Already Added");
                }
            else
                {
                    updatedData = [...getCartDataFromLs,id];
                    setToLsM(updatedData)
                }
        }
const setToLsM = idx =>
    {
        localStorage.setItem("Cart",JSON.stringify(idx));
    }
const getStrWFromLs = () =>
    {
        const getStrW = localStorage.getItem("Wishlist");
        return getStrW ? JSON.parse(getStrW) : [];
    }
const SaveWToLs = id =>
    {
        let updatedWish = [];
        const valWStr = getStrWFromLs();
        if(valWStr.includes(id))
            {
                console.log("Already added to the Wish List!");
            }
        else
            {
                updatedWish = [...valWStr,id];
                SaveWToLsM(updatedWish)
            }

    }
const SaveWToLsM = idx =>
    {
        localStorage.setItem("Wishlist",JSON.stringify(idx));
    }
const deleteFromLs = id =>
    {
        const allCart = getStoredDataFromLs();
        const filteredCart = allCart.filter(each=>each!==id);
        setToLsM(filteredCart);
    }
const deleteWFromLs = id =>
    {
        const allWishData = getStrWFromLs();
        const filteredWish = allWishData.filter(eachWish=>eachWish!==id);
        SaveWToLsM(filteredWish);
    }
export {getStoredDataFromLs,setToLs,getStrWFromLs,SaveWToLs,deleteFromLs,deleteWFromLs}
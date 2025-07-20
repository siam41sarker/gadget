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
                    localStorage.setItem("Cart",JSON.stringify(updatedData));
                }
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
                localStorage.setItem("Wishlist",JSON.stringify(updatedWish));
            }

    }

export {getStoredDataFromLs,setToLs,getStrWFromLs,SaveWToLs}
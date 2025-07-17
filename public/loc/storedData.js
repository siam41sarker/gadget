const getStoredDataFromLs = () =>
        {
            const valStr = localStorage.getItem("Cart");
            return valStr?JSON.parse(valStr):[];
        }
const setToLs = id =>
        {
            let updatedData;
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
export {getStoredDataFromLs,setToLs}
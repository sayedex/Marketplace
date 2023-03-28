export const Tokenlist = [
{
    name:"bnb",
    decimals:18,
    icon:"/Token/bnb.svg",
    contractaddress:"0x09EFF1AEB50dc3562367D3cDc301A49459e16dA9",
    symbol:"BNB",
    stable:false,
    native:true

},
{
    name:"dai",
    decimals:18,
    icon:"/Token/dai.svg",
    contractaddress:"0x09EFF1AEB50dc3562367D3cDc301A49459e16dA9",
    symbol:"DAI",
    stable:true,
    native:false
},

]



export const SellToken = {
    "busd" : {
        name:"busd",
        decimals:18,
        icon:"/Token/busd.svg",
        contractaddress:"0x78867bbeef44f2326bf8ddd1941a4439382ef2a7"
    },
    "usdt" : {
        name:"usdt",
        decimals:6,
        icon:"/Token/usdt.svg",
        contractaddress:"0x55d398326f99059ff775485246999027b3197955"
    }
};

    



export const MintToken = "0x09eff1aeb50dc3562367d3cdc301a49459e16da9";




export const Allpool: {[key: string]: any}  = {
    "0x09eff1aeb50dc3562367d3cdc301a49459e16da9":{
        name:"busd",
        decimals:18,
        icon:"/Token/busd.svg",
        contractaddress:"0x09eff1aeb50dc3562367d3cdc301a49459e16da9",
        url:"https://api.thegraph.com/subgraphs/name/sayedex/usdp"
    },


}


export const UserBalance = [
    {
        name:"busd",
        contractaddress:"0x09eff1aeb50dc3562367d3cdc301a49459e16da9",
    },
]
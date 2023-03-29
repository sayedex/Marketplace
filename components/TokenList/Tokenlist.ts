export const Tokenlist = [
{
    name:"bnb",
    decimals:18,
    icon:"/Token/bnb.svg",
    contractaddress:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    symbol:"BNB",
    stable:false,
    native:true

},
{
    name:"dai",
    decimals:18,
    icon:"/Token/dai.svg",
    contractaddress:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
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



//pool info
export const Allpool: {[key: string]: any}  = {
    "0x09eff1aeb50dc3562367d3cdc301a49459e16da9":{
        name:"USDP",
        decimals:18,
        contractaddress:"0x09eff1aeb50dc3562367d3cdc301a49459e16da9",
        url:"https://api.thegraph.com/subgraphs/name/sayedex/usdp",
        mintToken:[
            {
                contractaddress:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                name:"BNB",
                isnative:true,
                stable:false
            }
        ]
    },
}


export const UserBalance = [
    {
        name:"busd",
        contractaddress:"0x09eff1aeb50dc3562367d3cdc301a49459e16da9",
    },
]


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
            ],
            backing:{
                name:"DAI",
                contract:""
            }
        },
    }

    
    export const UserBalance = [
        {
            name:"busd",
            contractaddress:"0x09eff1aeb50dc3562367d3cdc301a49459e16da9",
        },
    ]
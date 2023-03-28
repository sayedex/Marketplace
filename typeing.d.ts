export interface Token {
    contractaddress: string,
    name: string,
    decimals: any
    symbol: string,

}


export interface Tokenlist {
    contractaddress: string,
    name: string,
    decimals: any
    symbol: string,
    price?: number,
    stable:boolean,
    native:boolean

}

export interface Price {
    id: string
    price: number
    totalSupply: number,
    backing:number,
    mintfee:number,
    transferfee:number,
    sellfee:number,
    soldtokenid:string,
    tokensymbol:string
}

export interface Userinfo{
    tokenName:string,
    balance:number
}
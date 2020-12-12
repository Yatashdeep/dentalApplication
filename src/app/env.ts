const HTTP_TIMEOUT:number=20000;
export interface Enviroment{
    mainApi:String,
    timeout:number
}
export const Test:Enviroment={
mainApi:'http://localhost:3000',
timeout:HTTP_TIMEOUT    
}
export const Live:Enviroment={
    mainApi:'https://iqflowtech.com/dental/admin/API/V1',
    timeout:HTTP_TIMEOUT
}
export const ENV:Enviroment=Live;
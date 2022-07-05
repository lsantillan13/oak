import { Context } from "../../deps.ts";

export const findAll =  async (ctx: Context) => {
    try{
        ctx.response.body = await {code: "00", msg: "Metodo GET"};
    }
    catch(error){
        ctx.response.status = 500;
        ctx.response.body = {code: '99', msg: 'error'};
    }
};
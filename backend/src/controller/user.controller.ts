import { connect } from '../Database/DB';
import link from '../model/Links.model';
import { Request , Response  } from 'express';

export async function createlink(req: Request, res: Response) {
    const newLink: link = req.body.title;
    console.log(req.body)
try {
        const conn = await connect();
        const created = await conn.query(`INSERT INTO link SET ?`, [newLink])
    if(created){console.log("created")}
        return res.json({
            message: "Link created"
        })
} catch (error) {
    console.log(error)
    throw error
}
}




export async function getalllinks(req: Request, res: Response){
    const conn = await connect();
    const allLink = await conn.query("SELECT * FROM link")

    return res.json(allLink[0]);
}

export async function getlink(req: Request, res: Response){
    const LinkId = req.params.id;
    const conn = await connect();
    const ReqLink = await conn.query("SELECT * FROM link WHERE id==LinkId")

    return res.json(ReqLink[0])
}

export async function updatelink(req: Request, res: Response){
    const LinkId = req.params.id;
    const newTitle = req.body;
    const conn = await connect();
    await conn.query(`UPDATE link SET ? WHERE id = ?`, [newTitle, LinkId])
    return res.json({
        message: "Link updated"
    })
}


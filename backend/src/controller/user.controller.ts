import { connect } from '../Database/DB';
import link from '../model/Links.model';
import { Request , Response  } from 'express';

export async function createlink(req: Request, res: Response) {
    const { title } = req.body;
    try {
        const conn = await connect();
        const [result] = await conn.query('INSERT INTO links (title) VALUES (?)', [title]);
        console.log("created");
        res.status(201).json({ id: (result as any).insertId, title });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}





export async function getalllinks(req: Request, res: Response){
    const conn = await connect();
    const [allLink] = await conn.query("SELECT * FROM links")

    return res.json(allLink);
}

export async function getlink(req: Request, res: Response){
    const LinkId = req.params.id;
    const conn = await connect();
    const [ReqLink] = await conn.query("SELECT * FROM link WHERE id=?", LinkId)

    return res.json(ReqLink)
}

export async function updatelink(req: Request, res: Response){
    const LinkId = req.params.id;
    const {newTitle} = req.body;
    const conn = await connect();
    await conn.query(`UPDATE link SET title = ? WHERE id = ?`, [newTitle, LinkId])
    return res.json({
        message: "Link updated"
    })
}


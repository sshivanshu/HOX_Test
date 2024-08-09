import { RowDataPacket } from "mysql2"

export default interface link extends RowDataPacket {
    id?: string,
    title: string,

}
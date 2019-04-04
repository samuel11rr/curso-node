import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();


router.get( '/heroes', ( req: Request, res: Response ) => {

    const query =   `
                    SELECT * 
                    FROM heroes;
                    `;

    MySQL.executeQuery( query, ( err: any, data: Object[] ) => {

        if ( err ) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok:true,
                heroes: data
            });
        }

    });

});

router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id;
    const escapedId = MySQL.instance.connection.escape ( id );

    const query = `
                    SELECT * 
                    FROM heroes
                    WHERE id = ${ escapedId };
                    `;

    MySQL.executeQuery(query, (err: any, data: Object[]) => {

        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                heroe: data[0]
            });
        }

    });

});


export default router;
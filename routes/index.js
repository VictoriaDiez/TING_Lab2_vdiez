var express = require('express');
var router = express.Router();
const { Pool } = require ('pg');
const pool = new Pool ({
	connectionString: 'postgres://iftnibitynhxah:7b444979be7d601379e0252c638a83cdc548a4b99e7352df14aaa2fa55e19838@ec2-174-129-253-101.compute-1.amazonaws.com:5432/d1atd9iho2kb5f',
	ssl: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tecnologías de Internet de Nueva Generación del 2019' });
});

router.get( '/db', async ( req, res ) => {
	try{
		const client = await pool.connect();
		const result = await client.query( 'SELECT * FROM instrumentos_musica' );
		const results = { 'results': ( result ) ? result.rows: null};
		res.render( 'db', results );
		client.release();
	} catch ( err ) {
		console.error ( err );
		res.send(" Error " + err);
	}
})

router.get( '/db/1', async ( req, res ) => {
	try{
		const client = await pool.connect();
		const result = await client.query( 'SELECT * FROM instrumentos_musica where name like \'guitarra clásica\'' );
		const results = { 'results': ( result ) ? result.rows: null};
		res.render( 'db', results );
		client.release();
	} catch ( err ) {
		console.error ( err );
		res.send(" Error " + err)
	}
})

module.exports = router;

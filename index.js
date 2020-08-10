require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

exports.Model = class Model {
  constructor(table) {
    this.table = table;
  }

  read(objectId = {}) {
    const whereColumn = Object.keys(objectId)[0];
    const whereValue = Object.values(objectId)[0];

    if (whereColumn) {
      return connection
        .promise()
        .query(`SELECT * FROM ${this.table} WHERE ${whereColumn} = ?`, [whereValue])
        .then(([rows]) => ({ ...rows[0] } || null))
        .catch((error) => { throw new Error(error); });
    }
    return connection
      .promise()
      .query(`SELECT * FROM ${this.table}`)
      .then(([rows]) => rows.map((row) => ({ ...row })) || [])
      .catch((error) => { throw new Error(error); });
  }

  create(data = {}) {
    const insertColumns = Object.keys(data).toString();
    const insertValues = Object.values(data);

    return connection
      .promise()
      .query(`INSERT INTO ${this.table} (${insertColumns}) VALUES (?, ?)`, insertValues)
      .then(([rows]) => ({
        inserted: !!(rows.affectedRows === 1),
        insertId: rows.insertId || null,
      }))
      .catch((error) => { throw new Error(error); });
  }

  update(objectId = {}, data = {}) {
    // eslint-disable-next-line no-param-reassign
    delete data.id;
    const whereColumn = Object.keys(objectId)[0];
    const whereValue = Object.values(objectId)[0];

    return connection
      .promise()
      .query(`UPDATE ${this.table} SET ? WHERE ${whereColumn} = ?`, [data, whereValue])
      .then(([rows]) => ({
        updated: !!(rows.affectedRows === 1),
        where: objectId,
      }))
      .catch((error) => { throw new Error(error); });
  }

  delete(objectId = {}) {
    const whereColumn = Object.keys(objectId)[0];
    const whereValue = Object.values(objectId)[0];

    return connection
      .promise()
      .query(`DELETE FROM ${this.table} WHERE ${whereColumn} = ?`, [whereValue])
      .then(([rows]) => ({
        deleted: !!(rows.affectedRows === 1),
        where: objectId,
      }))
      .catch((error) => { throw new Error(error); });
  }
};

exports.query = (rawSQL = '', escape = '') => connection
  .promise()
  .query(rawSQL, escape)
  .then(([rows]) => rows || null)
  .catch((error) => { throw new Error(error); });

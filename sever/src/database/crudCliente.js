const config = require('../config/connection')
const sql = require('mssql')

async function list() {
    const listQuery = 'SELECT * FROM clientes'

    const pool = await sql.connect(config)
    const resultado = await pool.query(listQuery)
    return resultado.recordset
}

async function create({ razao_social, nome_fantasia, cnpj, contato, telefone, email }) {
    const createQuery = `INSERT INTO AGENDAMENTO.dbo.clientes ( razao_social, nome_fantasia, cnpj, contato, telefone, email) VALUES( '${razao_social}', '${nome_fantasia}', '${cnpj}','${contato}', '${telefone}' ,'${email}')`;
    console.log(createQuery);
    const pool = await sql.connect(config)
    const resultado = await pool.query(createQuery)
    return resultado.recordset
}


async function update({ razao_social, nome_fantasia, cnpj, contato, telefone, email }) {

    const updateQuery = `UPDATE AGENDAMENTO.dbo.clientes SET razao_social='${razao_social}', nome_fantasia='${nome_fantasia}', contato='${contato}', telefone='${telefone}', email='${email}' WHERE cnpj='${cnpj}';`
    console.log(updateQuery)
    const pool = await sql.connect(config)
    const resultado = await pool.query(updateQuery)
    return resultado.recordset
}

async function remove({ cnpj }) {
    const removeQuery = `DELETE FROM AGENDAMENTO.dbo.clientes WHERE cnpj='${cnpj}';`
    console.log(removeQuery)
    const pool = await sql.connect(config)
    const resultado = await pool.query(removeQuery)
    return resultado.recordset
}

async function finByCNPJ({ cnpj }) {
    const selecionarCnpjValido = `SELECT * FROM clientes WHERE cnpj = '${cnpj}'`
    console.log(selecionarCnpjValido)
    const pool = await sql.connect(config)
    const resultado = await pool.query(selecionarCnpjValido)
    return resultado.recordset
}



module.exports = {
    list,
    create,
    update,
    remove,
    finByCNPJ
}
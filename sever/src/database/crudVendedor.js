const config = require('../config/connection')
const sql = require('mssql')

async function list() {
    const listQuery = 'SELECT * FROM vendedores'

    const pool = await sql.connect(config)
    const resultado = await pool.query(listQuery)
    return resultado.recordset
}

async function create({ nome, cpf, data_inicio, data_termino }) {
    const createQuery = `INSERT INTO AGENDAMENTO.dbo.vendedores ( nome, cpf, data_inicio, data_termino) VALUES( '${nome}', '${cpf}', '${data_inicio}','${data_termino}')`;
    console.log(createQuery);
    const pool = await sql.connect(config)
    const resultado = await pool.query(createQuery)
    return resultado.recordset
}


async function update({ nome, cpf, data_inicio, data_termino }) {

    const updateQuery = `UPDATE AGENDAMENTO.dbo.vendedores SET nome='${nome}', data_inicio='${data_inicio}', data_termino='${data_termino}' WHERE cpf='${cpf}';`
    console.log(updateQuery)
    const pool = await sql.connect(config)
    const resultado = await pool.query(updateQuery)
    return resultado.recordset
}

async function remove({ cpf }) {
    const removeQuery = `DELETE FROM AGENDAMENTO.dbo.vendedores WHERE cpf='${cpf}';`
    console.log(removeQuery)
    const pool = await sql.connect(config)
    const resultado = await pool.query(removeQuery)
    return resultado.recordset
}

async function finByCPF({ cpf }) {
    const selecionarCpfValido = `SELECT * FROM vendedores WHERE cpf = '${cpf}'`
    console.log(selecionarCpfValido)
    const pool = await sql.connect(config)
    const resultado = await pool.query(selecionarCpfValido)
    return resultado.recordset
}

async function contratoAtivo({ data_termino }) {
    const dataTerminoQuery = `SELECT * FROM vendedores WHERE data_termino = '${data_termino}'`
    console.log(dataTerminoQuery)
    const pool = await sql.connect(config)
    const resultado = await pool.query(dataTerminoQuery)
    return resultado.recordset
}

module.exports = {
    list,
    create,
    update,
    remove,
    finByCPF,
    contratoAtivo
}
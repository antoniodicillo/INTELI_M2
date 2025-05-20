const db = require("../config/database");

module.exports = {
  async findAll(limit) {
    
    if(!limit) {
      limit = 5;
    }

    const result = await db.query("SELECT * FROM event ORDER BY created_at DESC LIMIT $1", [limit]);
    return result.rows;
  },

   async findById(id) {
    const result = await db.query("SELECT * FROM event WHERE id = $1", [id]);
    return result.rows[0];
  },

  async create(title, date, time, location,  body) {
    const query = "INSERT INTO event (title,eventdate,event_time,event_location,body,host_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const result = await db.query(query, [title, date, time, location, body, 1]);
    return result.rows[0];
  },

  // Função no model para atualizar o nome de um evento pelo ID
  async update(id, nome) {
    const query = "UPDATE event SET event = $1 WHERE id = $2 RETURNING *";
    const result = await db.query(query, [nome, id]);
    return result.rows[0];
  },

  // Função no model que remove um evento do banco de dados pelo ID
  async delete(id) {
    await db.query("DELETE FROM event WHERE id = $1", [id]);
  },
};
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",       
  user: "root",       
  password: "senai",       
  database: "igreja"  
});

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

export default db;

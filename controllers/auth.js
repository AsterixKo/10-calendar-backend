const { response } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
  // console.log(req);
  // const { name, email, password } = req.body;

  try {
    const usuario = new Usuario(req.body);

    await usuario.save();

    return res.status(201).json({
      ok: true,
      msg: "registro",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };

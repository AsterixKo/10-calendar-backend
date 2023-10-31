const { response } = require("express");
const Evento = require("../models/Evento");

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");
  try {
    return res.status(200).json({
      ok: true,
      eventos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const crearEvento = async (req, res = response) => {
  //   console.log(req.body);

  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();
    return res.status(200).json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "actualizarEvento",
  });
};

const eliminarEvento = async (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};

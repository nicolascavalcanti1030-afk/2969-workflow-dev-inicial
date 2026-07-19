import Evento from '../models/evento.js';

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static listarEventoPorId = async (req, res) => {
    const { params } = req;
    try {
      const resultado = await Evento.pegarPeloId(params.id);
      if (!resultado) {
        return res.status(404).json({ message: `id ${params.id} não encontrado` });
      }
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static cadastrarEvento = async (req, res) => {
    try {
      return res.status(201).json({ message: 'evento criado com sucesso' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static atualizarEvento = async (req, res) => {
    try {
      return res.status(200).json({ message: 'evento atualizado com sucesso' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static excluirEvento = async (req, res) => {
    try {
      return res.status(200).json({ message: 'evento excluído com sucesso' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventosController;

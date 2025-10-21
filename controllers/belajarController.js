import BelajarModel from "../model/belajarModel.js";

export const listBelajar = async (req, res) => {
  try {
    const data = await BelajarModel.find({});
    res.status(200).json({
      message: "List log pembelajaran",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const createNewBelajar = async (req, res) => {
  try {
    const { topic, summary, learningDate } = req.body;

    const response = await BelajarModel.create({
      topic,
      summary,
      learningDate: learningDate ? new Date(learningDate) : new Date(),
    });

    res.status(201).json({
      message: "Log pembelajaran berhasil dibuat",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const updateBelajar = async (req, res) => {
  try {
    const id = req.params.id;
    const { topic, summary, learningDate } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Pembelajaran wajib diisi",
        data: null,
      });
    }

    const updateData = {};
    if (topic !== undefined) updateData.topic = topic;
    if (summary !== undefined) updateData.summary = summary;
    if (learningDate !== undefined) updateData.learningDate = new Date(learningDate);

    const response = await BelajarModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!response) {
      return res.status(404).json({
        message: "Log pembelajaran tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "Log pembelajaran berhasil diupdate",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const deleteBelajar = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Pembelajaran wajib diisi",
        data: null,
      });
    }

    const response = await BelajarModel.findByIdAndDelete(id);

    if (response) {
      return res.status(200).json({
        message: "Log pembelajaran berhasil dihapus",
        data: response,
      });
    }

    res.status(404).json({
      message: "Log pembelajaran tidak ditemukan",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
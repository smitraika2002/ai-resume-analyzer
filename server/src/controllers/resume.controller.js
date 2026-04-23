import { parsePDF } from "../utils/pdfParser.js";
import { analyzeResumeAI } from "../services/ai.service.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const text = await parsePDF(req.file.buffer);

    const result = await analyzeResumeAI(text);

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Upload error:", error);

    res.status(500).json({
      success: false,
      data: {
        atsScore: 0,
        skills: [],
        suggestions: ["Server error"],
      },
    });
  }
};
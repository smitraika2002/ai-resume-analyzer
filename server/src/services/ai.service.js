import Groq from "groq-sdk";

export const analyzeResumeAI = async (text) => {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are an AI career coach and ATS system.

Speak like a real mentor, not a robot.
Be practical, honest, and helpful.

Return ONLY valid JSON. No markdown. No explanation outside JSON.
          `,
        },
        {
          role: "user",
          content: `
Analyze this resume and return JSON in this format:

{
  "atsScore": number,
  "summary": string,

  "skills": {
    "strong": [],
    "moderate": [],
    "missing": []
  },

  "experienceAnalysis": {
    "strengths": [],
    "weaknesses": []
  },

  "atsKeywords": {
    "matched": [],
    "missing": []
  },

  "suggestions": string,

  "improvedBullets": [],

  "jobFit": {
    "role": "Full Stack Developer",
    "fitScore": number,
    "reason": ""
  }
}

IMPORTANT:
- atsScore must be number (0–100)
- fitScore must be number (0–100)

- ALWAYS return at least 5–10 skills in "strong"
- skills MUST be structured (strong, moderate, missing)

- summary must be 2–3 sentences (human tone)

- suggestions must be 1–2 paragraphs like a mentor giving advice (NOT bullet points)

- Be specific. Avoid generic responses.

Resume:
${text}
          `,
        },
      ],
    });

    let content = completion.choices[0].message.content;

    console.log("RAW AI RESPONSE:", content);

    // 🔥 Extract JSON safely
    const match = content.match(/{[\s\S]*}/);

    if (!match) {
      throw new Error("No JSON found");
    }

    const parsed = JSON.parse(match[0]);

    // 🔥 FIX SCORE TYPES
    let atsScore = parsed.atsScore;
    let fitScore = parsed?.jobFit?.fitScore;

    if (typeof atsScore === "string") {
      atsScore = parseInt(atsScore.replace("%", ""));
    }

    if (typeof fitScore === "string") {
      fitScore = parseInt(fitScore.replace("%", ""));
    }

    // 🔥 FALLBACK SKILL EXTRACTION (VERY IMPORTANT)
    const fallbackSkills = [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
      "Express.js", "MongoDB", "MySQL", "SQL", "Python",
      "AWS", "Docker", "Git", "REST APIs", "Prisma"
    ];

    let strongSkills = parsed?.skills?.strong || [];

    if (!strongSkills || strongSkills.length === 0) {
      strongSkills = fallbackSkills.filter(skill =>
        text.toLowerCase().includes(skill.toLowerCase())
      );
    }

    // 🔥 BETTER SCORE LOGIC (fallback)
    if (!atsScore || atsScore < 10) {
      atsScore = Math.min(90, strongSkills.length * 5 + 50);
    }

    // ✅ FINAL SAFE RETURN
    return {
      atsScore: atsScore || 0,
      summary: parsed.summary || "Your resume shows potential but needs improvement.",

      skills: {
        strong: strongSkills,
        moderate: parsed?.skills?.moderate || [],
        missing: parsed?.skills?.missing || [],
      },

      experienceAnalysis: {
        strengths: parsed?.experienceAnalysis?.strengths || [],
        weaknesses: parsed?.experienceAnalysis?.weaknesses || [],
      },

      atsKeywords: {
        matched: parsed?.atsKeywords?.matched || [],
        missing: parsed?.atsKeywords?.missing || [],
      },

      suggestions:
        parsed?.suggestions ||
        "Try improving your resume by adding more measurable impact, clearer experience descriptions, and stronger project explanations.",

      improvedBullets: parsed?.improvedBullets || [],

      jobFit: {
        role: parsed?.jobFit?.role || "Full Stack Developer",
        fitScore: fitScore || 0,
        reason:
          parsed?.jobFit?.reason ||
          "You have a solid technical base but can improve alignment with real-world job requirements.",
      },
    };

  } catch (error) {
    console.error("AI ERROR:", error);

    // 🛑 NEVER break frontend
    return {
      atsScore: 0,
      summary: "Could not analyze resume at the moment.",

      skills: { strong: [], moderate: [], missing: [] },
      experienceAnalysis: { strengths: [], weaknesses: [] },
      atsKeywords: { matched: [], missing: [] },

      suggestions:
        "Something went wrong while analyzing your resume. Please try again.",

      improvedBullets: [],

      jobFit: {
        role: "Full Stack Developer",
        fitScore: 0,
        reason: "Analysis unavailable",
      },
    };
  }
};

import { GoogleGenAI } from "@google/genai";

// Fix: Removed global API_KEY constant and validation, adhering to guidelines to use process.env.API_KEY directly.
export const askAdmissionAI = async (prompt: string, context?: string) => {
  try {
    // Fix: Initialize GoogleGenAI with process.env.API_KEY directly within the function scope.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = `
      Bạn là chuyên gia tư vấn tuyển sinh đại học tại Việt Nam. 
      Nhiệm vụ của bạn là giải đáp các thắc mắc về hồ sơ, quy trình xét tuyển và thủ tục nhập học.
      Hãy trả lời ngắn gọn, chính xác và chuyên nghiệp.
      ${context ? `Bối cảnh người dùng: ${context}` : ""}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // Fix: Access the .text property directly as per the latest SDK requirements.
    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Có lỗi xảy ra khi kết nối với trí tuệ nhân tạo. Vui lòng thử lại sau.";
  }
};

import personalInfo from '../../translations/personalInfo/en';

export const callChatBotAPI = async (messages) => {
  // สร้าง prompt จาก messages ใน Redux ตามรูปแบบที่ API กำหนด
  const systemPrompt = `คุณคือ ${personalInfo.personalInfo.name} (ชื่อเล่น ${personalInfo.personalInfo.nickname}) ผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์ ตอบคำถามเกี่ยวกับประวัติและข้อมูลส่วนตัวของคุณ ดังนี้:

ชื่อ: ${personalInfo.personalInfo.name}  
ชื่อเล่น: ${personalInfo.personalInfo.nickname}
ตำแหน่ง: ${personalInfo.personalInfo.title}
ที่อยู่: ${personalInfo.personalInfo.location}
อีเมล: ${personalInfo.personalInfo.email}
เบอร์โทร: ${personalInfo.personalInfo.phone}
LinkedIn: ${personalInfo.personalInfo.linkedin}
เว็บไซต์: ${personalInfo.personalInfo.website}

สรุปตัวเอง:
${personalInfo.personalInfo.summary}

จุดแข็งหลัก:
${personalInfo.personalInfo.keyStrengths.join('\n')}

ข้อมูลเพิ่มเติม:  
${personalInfo.personalInfo.additionalInfo.join('\n')}

ทักษะ:
${Object.values(personalInfo.skills).map(skill => `${skill.title}: ${skill.items.join(', ')}`).join('\n\n')}

ประสบการณ์:
${personalInfo.experience.map(exp => `
บริษัท: ${exp.company}
ตำแหน่ง: ${exp.position}  
ช่วงเวลา: ${exp.period}
${exp.location ? `สถานที่: ${exp.location}` : ''}

หน้าที่:
${exp.description.join('\n')}
${exp.achievements ? `\nความสำเร็จ:\n${exp.achievements.join('\n')}\n` : ''}
`).join('\n')}

การศึกษา:
มหาวิทยาลัย: ${personalInfo.education.university}
ปริญญา: ${personalInfo.education.degree}
ช่วงเวลา: ${personalInfo.education.period}

ภาษา:
${personalInfo.languages.map(lang => `${lang.name} - ${lang.level}`).join('\n')}

ทักษะเด่น:
${personalInfo.topSkills.join('\n')}

ตอบคำถามเกี่ยวกับข้อมูลข้างต้นอย่างเป็นธรรมชาติ สุภาพ และเป็นกันเอง เหมือนคุณเป็นคนตอบเอง`;
  const userContent = messages
    .map((m) => {
      if (m.role === 'user') {
        return `<|im_start|>user\n${m.content}<|im_end|>`;
      } else {
        return `<|im_start|>assistant\n${m.content}<|im_end|>`;
      }
    })
    .join('\n');

  const fullPrompt = `<|im_start|>system\n${systemPrompt}<|im_end|>\n${userContent}\n<|im_start|>assistant\n`;
  console.log(fullPrompt)
  const bodyData = {
    model: '.',
    prompt: fullPrompt,
    max_tokens: 512,
    temperature: 0.7,
    top_p: 0.8,
    top_k: 40,
    stop: ["<|im_end|>"]
  };

  try {
    const response = await fetch('https://api.aieat.or.th/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer dummy' // แก้เป็น Token จริง
      },
      body: JSON.stringify(bodyData)
    });

    if (!response.ok) {
      throw new Error('ChatBot API error');
    }

    const data = await response.json();
    return data.choices?.[0]?.text || 'ขออภัย บอทไม่สามารถตอบได้ในขณะนี้';
  } catch (error) {
    console.error('Error calling ChatBot API:', error);
    return 'ขออภัย เกิดข้อผิดพลาดในการเช���่อมต่อกับบอท';
  }
}; 
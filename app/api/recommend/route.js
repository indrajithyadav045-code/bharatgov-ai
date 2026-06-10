export async function POST(req) {
  try {
    const body = await req.json();

    const prompt = `
You are BharatGov AI Assistant.

User Details:
Age: ${body.age}
State: ${body.state}
Income: ${body.income}
Category: ${body.category}
Occupation: ${body.occupation}
Need: ${body.need}

Recommend the best Indian government scheme.

Return:
1. Scheme Name
2. Eligibility Reason
3. Required Documents
4. Official Website
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No AI recommendation found";

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

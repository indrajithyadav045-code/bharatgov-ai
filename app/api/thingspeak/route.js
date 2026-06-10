export async function POST(req) {
  try {
    const body = await req.json();

    const url = `https://api.thingspeak.com/update?api_key=${process.env.THINGSPEAK_WRITE_KEY}&field1=${body.age}&field2=${encodeURIComponent(body.state)}&field3=${body.income}&field4=${encodeURIComponent(body.category)}&field5=${encodeURIComponent(body.occupation)}&field6=${encodeURIComponent(body.need)}`;

    const response = await fetch(url);
    const result = await response.text();

    return Response.json({
      success: true,
      entryId: result,
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

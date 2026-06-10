export async function POST(req) {
  try {
    const body = await req.json();

    if (!process.env.THINGSPEAK_WRITE_KEY) {
      return Response.json({
        success: false,
        error: "ThingSpeak key missing",
      });
    }

    const url =
      "https://api.thingspeak.com/update?api_key=" +
      process.env.THINGSPEAK_WRITE_KEY +
      "&field1=" +
      encodeURIComponent(body.age) +
      "&field2=" +
      encodeURIComponent(body.state) +
      "&field3=" +
      encodeURIComponent(body.income) +
      "&field4=" +
      encodeURIComponent(body.category) +
      "&field5=" +
      encodeURIComponent(body.occupation) +
      "&field6=" +
      encodeURIComponent(body.need);

    const response = await fetch(url);
    const result = await response.text();

    return Response.json({
      success: true,
      entryId: result,
      sentData: body,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}

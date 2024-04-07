const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      throw new Error("Please provide an email");
    }
    const subRes = await fetch(
      `https://api.convertkit.com/v3/subscribers?api_secret=${"qgE0S9aiAWhwXqgVlirE2CBkTpJEl8dlkiczWs2u64w"}&email_address=${email}`
    );
    if (!subRes.ok) {
      throw new Error("Something went wrong");
    }
    const subData = await subRes.json();
    const isSubscribed = subData.total_subscribers > 0;
    if (isSubscribed) {
      return new Response(
        JSON.stringify({
          message: "You're already subscribed!"
        }),
        {
          status: 200,
          statusText: "OK"
        }
      );
    }
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${"6427470"}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          api_key: "XZ1YnhK00JrB_-FW2CGLHw",
          email
        })
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong with your subscription");
    }
    const resText = await res.json();
    if (resText.error) {
      throw new Error(resText.error.message);
    }
    return new Response(
      JSON.stringify({
        message: "Thanks! Please check your email to confirm your subscription."
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } catch (e) {
    if (e instanceof Error) {
      return new Response(null, {
        status: 400,
        statusText: e.message
      });
    }
    return new Response(null, {
      status: 400,
      statusText: "There is an unexpected error"
    });
  }
};

export { POST, prerender };

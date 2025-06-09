import Fastify from "fastify";

const fastify = Fastify();

fastify.post("/wp-json/jwt-auth/v1/token", (request, reply) => {
  reply.send({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2N1cnNvcy5pbG9zLmNvbS5iciIsImlhdCI6MTc0MDc0NDA1OCwibmJmIjoxNzQwNzQ0MDU4LCJleHAiOjE3NDEzNDg4NTgsImRhdGEiOnsidXNlciI6eyJpZCI6IjMxMyJ9fX0.kZ62-jaBW8Az43jr4QdOhn5TdzkV54eQp0_7ciRaio4",
    user_email: "guiabraun@hotmail.com",
    user_nicename: "guiabraunhotmail-com",
    user_display_name: "GUILHERME BRAUN",
  });
});

fastify.post("/wp-json/adeapi/v1/adecreateuser", (request, reply) => {
  reply.send(request.body);
});

fastify.listen(
  {
    port: 3001,
  },
  (err) => {
    if (err) {
      fastify.log.err(err);
      process.exit(1);
    }
  }
);

import { signUp, login } from "../../api/controller/authController.js";

function authRoutes(fastify, options, done) {
  const signupSchema = {
    body: {
      type: "object",
      required: ["username", "password", "email"],
      properties: {
        username: { type: "string" },
        password: { type: "string" },
        email: { type: "string", format: "email" },
      },
    },
  };

  const loginSchema = {
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
    },
  };

  fastify.post("/signup", { schema: { body: signupSchema } }, signUp);
  fastify.post("/login", { schema: { body: loginSchema } }, login);

  done();
}

export default authRoutes;

import { fastify } from "fastify";
import authRoutes from "../api/routes/authRoutes.js";

const api = fastify({ logger: true });

api.register(authRoutes);

const start = async () => {
  try {
    api.listen({ port: 3000 });
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }
};

start();

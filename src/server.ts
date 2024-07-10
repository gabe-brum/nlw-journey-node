import fastify from "fastify";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import {
  createLink,
  confirmParticipant,
  confirmTrip,
  createActivity,
  createTrip,
  getActivities,
  getLinks,
  getParticipants,
  createInvite,
  updateTrip,
  getTripDetails,
  getParticipant,
} from "./routes";
import { errorHandler } from "./error-handler";
import { env } from "./env";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(getParticipant);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripDetails);

app.listen({ port: env.PORT }).then(() => {
  console.log("server running");
});

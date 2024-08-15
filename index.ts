import app from "./src/app";

/**
 * TODO: Configure application
 *  app.services()
 *  app.drivers()
 *  app.config()
 */

///////////////////////////////////////////////////////////
// Gather details about server (app)
// const server = Bun.serve(app);
// app.setServerContext(server);
// app.stop(true);
// console.log(`Developing on ${server.url.origin}`);
///////////////////////////////////////////////////////////

/**
 * Export configured application.
 *
 */
export default app;

import express from 'express';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("Welcome to the Udagram endpoint, we are still in beta but so far we have the following endpoint(s) available:\n GET: /filteredimage?image_url=URL_HERE")
  } );

  // filterImage Endpoint
  app.get("/filteredimage", async (req, res) => {
    let { image_url } = req.query;
    if (!image_url || !linkChecker(image_url)) {
      return res.status(400).send(`Invalid URL or unsupported Image format (Only JPEG/JPG and PNG are allowed)`);
    }
    let filteredimage: string = await filterImageFromURL(image_url);
    // Express's sendFile has the following arguments available 
    // res.sendFile(fileName, options, func{})
    // we will use the last argument to make sure the file is deleted AFTER delivery
    res.sendFile(filteredimage, {}, () => deleteLocalFiles([filteredimage]));
  })

  // Verify the URL
  function linkChecker(inputText: string) {
    let urlPattern = new RegExp(
      /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)\.(?:jpe?g|png)$/gi
    );
    return urlPattern.test(inputText);
  }
  
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

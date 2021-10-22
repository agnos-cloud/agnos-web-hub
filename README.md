# agnos-web-hub

Agnos provides you with a drag-and-drop interface to help you create system designs. You can also bring your system designs to life by provisioning them on any of the popular cloud providers, right from within the app.

This repository is for the hub that combines all Agnos micro frontends into a single, cohesive UI.

# Running Locally

- Clone this repository locally
- Install dependencies by running `npm i`
- Start the server by running `npm start`. This starts the app on port `9000` (as specified in the start script in [package.json](package.json))

### Running the designer

The Agnos UI is built using micro frameworks that exists in their own repositories. The first micro frontend we will be running is the drag-and-drop designer.

- Clone the [repository](https://github.com/agnos-cloud/agnos-web-designer) locally
- Install dependencies by running `npm i`
- Start the server by running `npm start`. This starts the app on port `9001` (as specified in the start script in [package.json](package.json))
- This micro frontend is mounted on the root route of the Agnos UI. To view, navigate to [http://localhost:9000/](http://localhost:9000/)
- You can now begin your system design by dragging and dropping components on the canvas.

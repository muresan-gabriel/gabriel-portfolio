## About the project

This is a platform which was developed using React and TailwindCSS. It was built to provide a visual way in a local web application how Linked Lists work.

It does not use any database or server, it is a simple React application, where preferences are stored in the browser's local storage.

## Functionalities

### Creation of a Node

To create a node, in the List Manager menu on the right, you can click on the "Add Node" button. Besides this, you can also press the key combination <code>CTRL</code> + <code>Y</code>. The button will be swapped with an input field where you can enter the value of the node. After you enter the value, you can press the "Add" button. The node will be added to the list.

<img src="/img/portfolio-imgs/vll-node-creation.png" />

### Creating Lists

After generating a new node, hovering on the node itself on any of its sides will display a white circle. Clicking the white circle will generate an SVG arrow which can be used to connect nodes together. The arrow will be connected to the node you clicked on and you can drag it to another node to connect them.

<img src="/img/portfolio-imgs/vll-live.gif" />

### Configuration Menu

The configuration menu is used to configure various aspects of the nodes. Currently, you are able to select the type of address (real, simplified or integer), thus generating random addresses of the selected type for each node. Currently you cannot switch between singly or doubly linked lists, but this feature will be added in the future.

<img src="/img/portfolio-imgs/vll-config.gif" />

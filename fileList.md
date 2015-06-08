## File tree

├── README                              This file.
└── wealthMan
    ├── both
    │   ├── collections
    │   │   ├── model.js                Definition of the collection in which models
    │   │   │                               are stored.
    │   │   ├── modelSecurity.js        Definition of the collection in which
    │   │   │                               model-security pairs are stored.
    │   │   └── security.js             Definition of the collection in which
    │   │                                   securites are stored.
    │   ├── lib
    │   │   └── lib
    │   │       └── logger.js           Log and Level objects on global scope for
    │   │                                   application logging and debugging 
    │   │                                   (written by Robert Sandell).
    │   └── route
    │       ├── controller
    │       │   ├── dashboard.js        Dashboard page controller.
    │       │   ├── home.js             Home page controller.
    │       │   ├── register.js         Register page controller.
    │       │   └── template
    │       │       ├── auth.js         General controller to filer out
    │       │                               unauthenticated users.
    │       │       └── noauth.js       General controller for pages where
    │       │                               authentication isn't needed.
    │       └── map.js                  Router to map routes to controllers.
    ├── client
    │   ├── lib
    │   │   ├── master_style.css        Master style sheet.
    │   │   ├── master_template.html    Master template.
    │   │   └── uikit.css               UIKit style sheet.
    │   └── views
    │       ├── dashboard
    │       │   ├── main.js             Helpers and events for the dashboard template.
    │       │   ├── style.css           Stylesheet for the dashboard template.
    │       │   └── template.html       The dashboard template (where the user can 
    │       │                               view and edit models and securities)
    │       │                               definition.
    │       ├── home
    │       │   ├── main.js             Helpers and events for the home template.
    │       │   ├── style.css           Style sheet for the home template.
    │       │   └── template.html       The home template definition.
    │       └── register
    │           ├── main.js             Helpers and events for the register template.
    │           ├── style.css           Style sheet for the register template.
    │           └── template.html       The register template definition.
    └── server
        ├── methods.js                  Meteor collection methods.
        └── publications.js             Meteor collection publications.

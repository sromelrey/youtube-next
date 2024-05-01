## A  Next.js that use YouTube Data API


First, run the development server:

```bash
npm run dev
```
To get stated visit:
https://developers.google.com/youtube/v3/getting-started

Create a .env file in the root directory with the following keys:

  ```bash
API_KEY="YOUR_API_KEY"; // Replace with your YouTube Data API key
CLIENT_ID="CLIENT_ID"; // Replace with your YouTube Data API CLIENT_ID key

```
## This app is deployed and running in vercel
https://youtube-next-rho.vercel.app/

## Folder structure
.
├── app # Root application component contains all the routes, components, and logic for the application.
│   ├── components # Reusable UI components (mostly client side components)
│   │   └── search.tsx # resusable component
│   ├── layout.tsx 
│   ├── global.css # Global stylesheet (optional)
│   ├── font.css # Root layout (optional)
│   └── lib # folder for server actions, helpers and utils functions.
├── package.json
└── README.md
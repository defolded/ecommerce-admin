# About ecommerce-admin
This is an admin dashboard for MyStore. You can find the front-end store in [this repository](https://github.com/defolded/ecommerce-store).
## Projct preview
![Screen Recording 2023-11-26 at 10 48 02 AM](https://github.com/defolded/ecommerce-admin/assets/78711414/6a123783-7f34-4d35-872e-beb995af9380)

## Run locally
Clone this repository to your device 
```
git clone https://github.com/defolded/ecommerce-admin.git
```
Note: Make sure you have [Node.js](https://nodejs.org/en/) and [GitHub CLI](https://cli.github.com) installed on your machine.

Install the required packages
```
npm i
```

Create a .env file inside the root of the project folder and populate it with your API keys
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 
CLERK_SECRET_KEY=
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
STRIPE_API_KEY= 
FRONTEND_STORE_URL=https://localhost:3001 
STRIPE_WEBHOOK_SECRET=
```

### Usage
Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Pitchify

Pitchify is a modern platform for startups to showcase their pitch decks and connect with potential investors. Built with cutting-edge web technologies, it provides a seamless experience for entrepreneurs to present their ideas and for investors to discover promising ventures.

![Pitchify Platform](https://via.placeholder.com/800x400?text=Pitchify+Platform)

## Features

- **Startup Profiles**: Create and manage detailed startup profiles with descriptions, pitch decks, and categorization
- **Markdown Support**: Write rich pitch descriptions using Markdown formatting
- **User Authentication**: Secure GitHub authentication for users
- **Responsive Design**: Fully responsive interface that works on all devices
- **Real-time Updates**: Content updates in real-time as you edit
- **User Profiles**: Dedicated user profile pages to showcase all pitches by a specific author
- **View Tracking**: Analytics to track pitch views and engagement

## Tech Stack

- **Frontend**: 
  - [Next.js 15](https://nextjs.org/) with App Router and Partial Prerendering (PPR)
  - [React 19](https://react.dev/)
  - [TailwindCSS 4](https://tailwindcss.com/) for styling
  - [TypeScript](https://www.typescriptlang.org/) for type safety

- **Backend & CMS**:
  - [Sanity](https://www.sanity.io/) for content management
  - [NextAuth.js](https://next-auth.js.org/) for authentication with GitHub provider

- **Additional Libraries**:
  - [Markdown-it](https://github.com/markdown-it/markdown-it) for rendering Markdown content
  - [Radix UI](https://www.radix-ui.com/) for accessible UI components

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager
- GitHub account (for authentication)
- Sanity account (for CMS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aadityahasabnis/Pitchify.git
   cd pitchify
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Authentication
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret

   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   ```

4. Generate Sanity types:
   ```bash
   npm run typegen
   # or
   yarn typegen
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
pitchify/
├── app/                  # Next.js App Router
│   ├── (root)/           # Main application routes
│   │   ├── startup/      # Startup-related pages
│   │   └── user/         # User profile pages
    └── styles/           # Global styles
├── components/           # Reusable React components
├── lib/                  # Utility functions
├── public/               # Static assets
├── sanity/               # Sanity configuration and schemas
│   ├── lib/              # Sanity client and queries
│   └── schemas/          # Content schemas
               
```

## Deployment

The application can be deployed on [Vercel](https://vercel.com/) for optimal performance with Next.js:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Sanity](https://www.sanity.io/) for the powerful content management system
- [Vercel](https://vercel.com/) for hosting and deployment solutions

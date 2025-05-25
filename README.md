# SuiMemento

SuiMemento is a decentralized application (dApp) built on the Sui blockchain, designed to revolutionize event engagement by creating verifiable, dynamic NFT badges as proof of attendance. With a futuristic Afrocentric aesthetic, it blends traditional African design elements with modern Web3 technology to foster community, recognition, and cultural pride across Africa and beyond. Key features include event creation, badge minting, a marketplace for trading badges, and a user-friendly interface optimized for mobile and web.

This project extends the Sui dApp Starter Template created with `@mysten/create-dapp`, leveraging the following tools:

- [React](https://react.dev/) as the UI framework
- [TypeScript](https://www.typescriptlang.org/) for type checking
- [Vite](https://vitejs.dev/) for build tooling
- [Radix UI](https://www.radix-ui.com/) for pre-built UI components
- [ESLint](https://eslint.org/) for linting
- [`@mysten/dapp-kit`](https://sdk.mystenlabs.com/dapp-kit) for wallet connectivity and blockchain interactions
- [pnpm](https://pnpm.io/) for package management
- [react-router-dom](https://reactrouter.com/) for client-side routing
- [react-slick](https://react-slick.neostack.com/) for carousel functionality

For a guide on building a Sui dApp, refer to the [Sui documentation](http://docs.sui.io/guides/developer/app-examples/e2e-counter#frontend).

## Features

- **Home Page**: A dynamic landing page with a carousel of upcoming events and platform highlights.
- **Event Discovery**: Browse and filter events by location, category, or date, with details on organizers and NFT badges.
- **Badge Minting**: Claim NFT badges using unique event codes, with plans for zkLogin integration for seamless onboarding.
- **User Profile**: A dashboard displaying a user's NFT badge collection and participation history.
- **Marketplace**: Trade or showcase NFT badges, supporting dynamic NFTs that evolve with user interactions.
- **Organizer Portal**: Tools for event organizers to create events, design badges, and manage attendees.

## File Structure

\`\`\`text
src/
├── components/         # Reusable components (e.g., Layout)
├── pages/             # Page-specific components (Home, EventDiscovery, etc.)
├── constants.ts       # Blockchain package IDs
├── App.tsx            # Main app with routing
├── main.tsx           # Entry point with providers
├── networkConfig.ts   # Network configuration
└── styles/            # Custom CSS for Afrocentric design
move/
└── suimemento/
    └── sources/
        ├── event.move     # Event management contract
        ├── badge.move     # NFT badge management contract
        └── marketplace.move # Marketplace functionality contract
\`\`\`

## Prerequisites

- **Node.js** (v16 or later): `node -v`
- **pnpm**: `pnpm -v`
- **Sui CLI**: Follow the [Sui installation instructions](https://docs.sui.io/build/install)
- A Sui-compatible wallet (e.g., Sui Wallet) installed in your browser

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Sui CLI for Testnet

Set up the Sui CLI to use the testnet:

```bash
sui client new-env --alias testnet --rpc https://fullnode.testnet.sui.io:443
sui client switch --env testnet
```

Create a new address if needed:

```bash
sui client new-address secp256k1
sui client switch --address 0xYOUR_ADDRESS
```

Request testnet SUI from the faucet: `https://faucet.sui.io`.

### 3. Publish Move Contracts

Navigate to the `move/suimemento` directory and publish the contracts:

```bash
cd move/suimemento
sui client publish --gas-budget 100000000
```

Update `src/constants.ts` with the package IDs from the output:

```ts
export const TESTNET_EVENT_PACKAGE_ID = "0xYOUR_EVENT_PACKAGE_ID";
export const TESTNET_BADGE_PACKAGE_ID = "0xYOUR_BADGE_PACKAGE_ID";
export const TESTNET_MARKETPLACE_PACKAGE_ID = "0xYOUR_MARKETPLACE_PACKAGE_ID";
```

### 4. Start the dApp

Run the development server:

```bash
pnpm dev
```

Access the app at `http://localhost:5173`.

### 5. Build for Production

Create a production build:

```bash
pnpm build
```

Serve the build locally to test:

```bash
pnpm install -g serve
serve -s dist
```

## Development Notes

- **Smart Contracts**: The `event.move`, `badge.move`, and `marketplace.move` files provide core functionality. Update the `claim_badge` function in `badge.move` to include proper code verification logic.
- **zkLogin**: Planned integration for seamless onboarding (see [Sui zkLogin documentation](https://docs.sui.io/guides/developer/zklogin)).
- **Dynamic NFTs**: The `badge.move` contract supports upgrading badge levels. Extend this for additional dynamic features.
- **Afrocentric Design**: Customize `src/styles/global.css` with patterns (e.g., kente) for a richer aesthetic.

## Troubleshooting

- **Wallet Issues**: Ensure a Sui-compatible wallet is installed and connected to the testnet.
- **Import Errors**: Verify all files exist in `src/pages/` and imports are correct (e.g., `@mysten/dapp-kit`).
- **Contract Deployment**: Check package IDs in `src/constants.ts` and testnet connectivity.

## Future Enhancements

- Integrate zkLogin for simplified user authentication.
- Fetch real event and badge data from the blockchain.
- Add social sharing and gamification features (e.g., leaderboards).
- Enhance responsive design for diverse devices across Africa.

For support, refer to the [Sui documentation](https://docs.sui.io/) or the SuiMemento project repository.

# Token Sale

This repository contains the Solidity code for a token sale contract, allowing for the deployment of a token sale on the Ethereum blockchain.

## Overview

The token sale contract facilitates the sale of tokens to participants in exchange for Ether (ETH). It includes features such as:

- **Token Purchase**: Participants can purchase tokens by sending Ether to the contract.
- **Token Distribution**: Tokens are distributed automatically upon purchase.
- **Sale Management**: Admin functions to start, and end the token sale.

## Screenshot
![scr_shot_loading](https://github.com/judechimaobi/Token-Sale/assets/32282619/a438c253-6ced-4caf-86d4-97a2e0b6e660)
![scr_shot_loaded](https://github.com/judechimaobi/Token-Sale/assets/32282619/43701797-b7b0-4721-bae1-ac03821994ca)
![scr_shot_confirm_tnx](https://github.com/judechimaobi/Token-Sale/assets/32282619/f6c5f590-b63b-4749-9b90-f1f64bbc66d7)
![scr_shot1](https://github.com/judechimaobi/Token-Sale/assets/32282619/eb255d62-b704-4064-838e-f8b155ddeb54)
![scr_shot_test](https://github.com/judechimaobi/Token-Sale/assets/32282619/d50a693b-0ecb-4649-819f-df6fdcef1d8a)
![scr_shot_clientside](https://github.com/judechimaobi/Token-Sale/assets/32282619/ac12a884-9bc0-4ec6-8699-ec40bab6b18c)


## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (version 12 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)
- Truffle (version 5.0 or later)
- Ganache CLI (version 6.0 or later)

##
1. Clone the repository:

   ```sh
   git clone https://github.com/judechimaobi/token-sale.git
   cd token-sale

2. Install the dependencies:<br>
   
   With npm:
   ```sh
   npm install

   ```
   With yarn:
   ```
   yarn install
   ```

## Usage
1. Start Ganache CLI:
  
   ```sh
   ganache-cli

2. Compile the contracts:
   With npm:
   ```sh
   npx truffle compile
   ```
   With yarn:
   ```
   yarn install
   ```

3. Migrate the contracts to the blockchain:

   With npm:
   ```sh
   npx truffle migrate
    ```
   With yarn:
   ```
   yarn truffle migrate
   ```

4. Run the tests:

   With npm:
   ```sh
   npx truffle test
    ```
   With yarn:
   ```
   yarn truffle test
   ```

## Notes
Ensure Ganache CLI is running on the default port (8545) before running the migration and test commands.
You can configure the Truffle project by modifying the truffle-config.js file according to your development environment.

## Contracts

- **BigTokenSale.sol**: Main token sale contract.
- **BigToken.sol**: ERC20 token contract.

## Tests

- **BigTokenSale.js**: Testing script for token sale contract.
- **BigToken.js**: Testing script for token contract.

## Documentation

- **README.md**: Overview of the project, installation guide, and usage instructions.
- **Deployment_Guide.md**: Guide for deploying the contracts.
- **Token_Sale_Contract_Architecture.md**: Explanation of the contract architecture and design choices.
- **API_Documentation.md**: Documentation for contract functions and events.

## Scripts

- **deploy.js**: Script to deploy the contracts.
- **interact.js**: Script to interact with the deployed contracts.



## License

This project is licensed under the MIT License. See the LICENSE file for details.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Contributing

Contributions are welcome! Please refer to the [Contribution Guidelines](CONTRIBUTING.md) for more information.
















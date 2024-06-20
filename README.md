# Token Sale

This repository contains the Solidity code for a token sale contract, allowing for the deployment of a token sale on the Ethereum blockchain.

## Overview

The token sale contract facilitates the sale of tokens to participants in exchange for Ether (ETH). It includes features such as:

- **Token Purchase**: Participants can purchase tokens by sending Ether to the contract.
- **Token Distribution**: Tokens are distributed automatically upon purchase.
- **Sale Management**: Admin functions to start, and end the token sale.

## Screenshot

![Screenshot](scr_shot_loading.png)
![Screenshot](scr_shot_loaded.png)
![Screenshot](scr_shot_confirm_tnx.png)
![Screenshot](scr_shot1.png)
![Screenshot](scr_shot_test.png)
![Screenshot](scr_shot_clientside.png)

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
















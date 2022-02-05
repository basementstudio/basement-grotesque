// SPDX-License-Identifier: MIT

/*
   ██╗
   ██║
   ██████╗
   ██╔══██╗  ██╗
   ██████╔╝  ██╝
   ╚═════╝   
                                                                                
   From the basement. https://basement.studio
*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Metadata example
/*
{
    description: "BSMNT Grotesque Access Card",
    external_url: "https://grotesque.basement.studio/"
    image: "https://gateway.pinata.cloud/ipfs/"
    name: "BSMNT Grotesque Access Card",
    hash: ""
    id: ""
}
*/

contract GrotesqueAccessCard is ERC721Enumerable, ERC721URIStorage, Ownable {
    uint256 public cost = 0.000001 ether;

    // Validation related variables
    uint256 public maxSupply = 500;
    uint256 public maxMintAmount = 1;
    uint256 public maxNFTPerAddress = 5;

    constructor() ERC721("BSMNT Grotesque Access Card", "BSMNT_NFT"){}

    function getNextTokenId() internal view returns (uint256) {
        uint256 supply = totalSupply();
        return supply + 1;
    }

    function mint(address receiver, string memory _tokenURI) public payable returns (uint256) {
        uint256 newTokenId = getNextTokenId();

        require(newTokenId <= maxSupply, "Max NFT limit exceeded");
        require(msg.value >= cost, "Insufficient funds");

        _mint(receiver, getNextTokenId());
        _setTokenURI(newTokenId, _tokenURI);

        return newTokenId;
    }

    function withdrawEther() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    //----------------------------------------------------------------

    function _beforeTokenTransfer(address from, address to, uint256 _tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, _tokenId);
    }

    function _burn(uint256 _tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(_tokenId);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(_tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

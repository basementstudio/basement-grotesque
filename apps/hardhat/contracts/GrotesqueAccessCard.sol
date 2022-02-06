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
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GrotesqueAccessCard is ERC721Enumerable, Ownable {
    uint256 public cost = 0.02 ether;

    string private baseURI;
    string private notRevealedURI;
    bytes32 private baseExtension = ".json";
    bool public revealed = false;

    // Validation related variables
    uint256 private maxSupply = 500;
    uint256 private maxMintAmount = 1;
    uint256 private maxNFTPerAddress = 5;

    constructor(string memory _initBaseURI, string memory _initNotRevealedURI) ERC721("BSMNT Grotesque Access Card", "BSMNT_NFT"){
        require(bytes(_initBaseURI).length > 0, "Base URI must be a non-empty string");
        require(bytes(_initNotRevealedURI).length > 0, "Not Revealed URI must be a non-empty string");

        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedURI);
    }

    function getNextTokenId() internal view returns (uint256) {
        uint256 supply = totalSupply();
        return supply + 1;
    }

    function mint() public payable returns (uint256) {
        uint256 newTokenId = getNextTokenId();

        require(newTokenId <= maxSupply, "Max NFT limit exceeded");
        require(msg.value >= cost, "Insufficient funds");

        _safeMint(msg.sender, getNextTokenId());

        return newTokenId;
    }

    function withdrawEther() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override (ERC721)
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        // If the token is not revealed, return the notRevealedURI
        if (revealed == false) {
            return notRevealedURI;
        }

        if (bytes(baseURI).length > 0) {
            return string(
                abi.encodePacked(
                    baseURI,
                    _tokenId.toString(),
                    baseExtension
                )
            );
        }

        super.tokenURI(_tokenId);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedURI = _notRevealedURI;
    }

    function reveal() public onlyOwner {
        revealed = true;
    }
}

const { time } = require( '@openzeppelin/test-helpers' );

var DankbotsArtDrops = artifacts.require( "DankbotsArtDrops.sol" );

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( DankbotsArtDrops );
}

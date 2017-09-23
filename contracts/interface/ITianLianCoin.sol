pragma solidity ^0.4.15;


contract ITianLianCoin {
	
	function mint(address _owner, uint256 _amount);
	function burn(uint256 _amount) returns (bool success);

	function changeOwner(address _newOwner)  returns(bool success);

	function startFunding(uint256 _fundingStartBlock, uint256 _fundingStopBlock) returns(bool success);
	function stopFunding()  external returns(bool success);

	function setTokenExchangeRate(uint256 _newRate) external ;
	function increaseSupply(uint256 _amount) external ;
	function decreaseSupply(uint256 _amount) external ;

	function kill() external;
}
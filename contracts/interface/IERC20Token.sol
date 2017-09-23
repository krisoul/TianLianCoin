pragma solidity ^0.4.15;

/* ERC20 Standard Token interface */
contract IERC20Token {
    /* 整个数字货币的总量 */
    function totalSupply()public constant returns(uint256 supply);
    /* 得到传入地址的账户余额 */
    function balanceOf(address _owner)public constant returns (uint256 balance);
    /* 调用者发送给账户(_to)数量为_value的代币 */
    function transfer(address _to, uint256 _value)public returns (bool success);
    /* _spender调用，_from发送给_to数量为_value的代币 */
    function transferFrom(address _from, address _to, uint256 _value)public returns (bool success);
    /* 调用者授权_spender用户使用数量为_value的代币，如：第三方支付 */
    function approve(address _spender, uint256 _value)public returns (bool success);
    /* 得到用户_owner 授权给 _soender 使用的代币剩余额度 */
    function allowance(address _owner, address _spender)public constant returns (uint value);
    /* 挖矿，给指定数量的代币给_owner */
    /*function mint(address _owner, uint256 _amount) returns (bool success);*/
    
}

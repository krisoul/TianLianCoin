const ERC20Token = artifacts.require('ERC20Token.sol');

contract('ERC20Token', (accounts) => {

	it("验证构造之后，名字，符号，数量" , async() => {
		let token = await ERC20Token.new('TianLianCoin','TL',1000);
		let name = await token.name.call()
		assert.equal(name, 'TianLianCoin');
		let symbol = await token.symbol.call();
		assert.equal(symbol, 'TL');
		let amount = await token.balanceOf.call(accounts[0]);
		assert.equal(amount, 1000);
	});

	it("验证转账之后的余额和事件", async() => {
		let token = await ERC20Token.new('TianLianCoin','TL',1000);
		let res = await token.transfer(accounts[1], 50);
		let balance;
		balance = await token.balanceOf.call(accounts[0]);
		assert.equal(balance, 950);
		balance = await token.balanceOf.call(accounts[1]);
		assert.equal(balance, 50);
		assert(res.logs.length > 0 && res.logs[0].event == 'Transfer');
	});



});

















	// it("验证构造之后，拥有者是第一个账户" , async() => {
	// 	let contract = await Ownable.new();
	// 	let owner = await contract.owner.call();
	// 	assert.equal(owner, accounts[0]);
	// });
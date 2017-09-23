/*
const Ownable = artifacts.require('Ownable.sol');

contract('Ownable', (accounts) => {

	it("验证构造之后，拥有者是第一个账户" , async() => {
		let contract = await Ownable.new();
		let owner = await contract.owner.call();
		assert.equal(owner, accounts[0]);
	});

	it("验证构造之后，拥有者不是第二个账户" , async() => {
		let contract = await Ownable.new();
		let owner = await contract.owner.call();
		assert.notEqual(owner, accounts[1]);
	});

	it("验证转移合同拥有者功能", async() =>{
		let contract = await Ownable.new();
		await contract.transferOwnership(accounts[1]);
		await contract.acceptOwnership({from: accounts[1]});
		let owner = await contract.owner.call();
		assert.equal(owner, accounts[1]);
	});

	it("验证转移合同拥有者功能之后触发事件", async() =>{
		let contract = await Ownable.new();
		await contract.transferOwnership(accounts[1]);
		let res = await contract.acceptOwnership({from: accounts[1]});
		assert(res.logs.length > 0 && res.logs[0].event == 'OwnershipUpdate');
	});

	it("验证转移合同拥有者功能,没接受则不变", async() =>{
		let contract = await Ownable.new();
		await contract.transferOwnership(accounts[1]);
		//await contract.acceptOwnership({from: accounts[1]});
		let owner = await contract.owner.call();
		assert.equal(owner, accounts[0]);
		assert.notEqual(owner, accounts[1]);
	});
});

*/

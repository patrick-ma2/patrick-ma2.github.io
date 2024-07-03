document.getElementById('approveButton').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    if (amount === '' || isNaN(amount)) {
        document.getElementsByClassName("tipError")[0].innerHTML = '<span style="color:#db705c">请输入授权USDT数量</span>';
        return;
    }
    approveTokens();
});
